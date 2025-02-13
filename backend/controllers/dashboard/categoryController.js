const formidable = require('formidable');
const { responseReturn } = require('../../utilies/response');
const cloudinary = require('cloudinary').v2;
const categoryModel = require('../../models/categoryModes');

class categoryController {
  add_category = async (req, res) => {
    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      // console.log(fields);
      // console.log(files);
      if (err) {
        responseReturn(res, 404, { error: 'something went wrong' });
      } else {
        let { name } = fields;
        let { image } = files;
        name = name.trim();
        const slug = name.split(' ').join('-');

        cloudinary.config({
          cloud_name: process.env.cloud_name,
          api_key: process.env.api_key,
          api_secret: process.env.api_secret,
          secure: true,
        });

        try {
          const result = await cloudinary.uploader.upload(image.filepath, {
            folder: 'categorys',
          });

          if (result) {
            const category = await categoryModel.create({
              name,
              slug,
              image: result.url,
            });

            console.log(category);

            responseReturn(res, 201, {
              category,
              message: 'Category upload success',
            });
          } else {
            responseReturn(res, 404, { error: 'Image upload failed' });
          }
        } catch (error) {
          responseReturn(res, 500, { error: 'server error' });
        }
      }
    });
  };

  get_category = async (req, res) => {
    try {
      const { page , searchValue , parPage } = req.query;
      const skipPage = Number(parPage) * (Number(page) - 1);

      console.log("Search Value:", searchValue);

      let query = {};
      
      if (searchValue) {
        query = { name: new RegExp(searchValue, "i") }; // 不使用 $text，避免索引問題
      }

      // 查詢分類資料
      const categorys = await categoryModel
        .find(query)
        .skip(skipPage)
        .limit(Number(parPage))
        .sort({ createdAt: -1 });

      // 計算總數
      const totalCategory = await categoryModel.countDocuments(query);

      return responseReturn(res, 200, {
        categorys,
        totalCategory,
        message: "Get category success",
      });
    } catch (error) {
      console.error("Error in get_category:", error);
      return responseReturn(res, 500, { message: "Server error" });
    }
  };
}

module.exports = new categoryController();
