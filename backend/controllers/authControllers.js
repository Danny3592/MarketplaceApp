const adminModel = require('../models/adminModel.js');
const sellerModel = require('../models/sellerModel.js');
const sellerCustomerModel = require('../models/chat/sellerCustomerModel.js');

const { responseReturn } = require('../utilies/response.js');
const bcrpty = require('bcrypt');
const { createToken } = require('../utilies/tokenCreate.js');

class authControllers {
  seller_login = async (req, res) => {
    setTimeout(async () => {
      const { email, password } = req.body;
      try {
        const seller = await sellerModel.findOne({ email }).select('+password');
        if (seller) {
          const match = await bcrpty.compare(password, seller.password);
          console.log(match);
          if (match) {
            const token = await createToken({
              id: seller.id,
              role: seller.role,
            });
            res.cookie('accessToken', token, {
              expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            });

            responseReturn(res, 200, { token, message: 'Login Success' });
          } else {
            responseReturn(res, 404, { error: 'Password is error' });
          }
        } else {
          responseReturn(res, 404, { error: 'Email not Found' });
        }
      } catch (error) {
        responseReturn(res, 500, { error: error.message });
      }
    }, 1500);
  };
  //end method

  admin_login = async (req, res) => {
    setTimeout(async () => {
      const { email, password } = req.body;
      try {
        const admin = await adminModel.findOne({ email }).select('+password');
        if (admin) {
          const match = await bcrpty.compare(password, admin.password);
          console.log(match);
          if (match) {
            const token = await createToken({
              id: admin.id,
              role: admin.role,
            });
            res.cookie('accessToken', token, {
              expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            });

            responseReturn(res, 200, { token, message: 'Login Success' });
          } else {
            responseReturn(res, 404, { error: 'Password is error' });
          }
        } else {
          responseReturn(res, 404, { error: 'Email not Found' });
        }
      } catch (error) {
        responseReturn(res, 500, { error: error.message });
      }
    }, 1500);
  };

  seller_register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const getUser = await sellerModel.findOne({ email });
      if (getUser) {
        responseReturn(res, 404, { error: 'email already exist' });
      } else {
        const seller = await sellerModel.create({
          name,
          email,
          password: await bcrpty.hash(password, 10),
          method: 'menually',
          shopInfo: {},
        });
        await sellerCustomerModel.create({
          myId: seller.id,
        });

        const token = await createToken({
          id: seller.id,
          role: seller.role,
        });
        res.cookie('accessToken', token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        responseReturn(res, 201, { token, message: 'Register Success' });
      }
    } catch (error) {
      responseReturn(res, 500, { error: 'server error' });
    }
  };

  getUser = async (req, res) => {
    const { id, role } = req;
    try {
      if (role === 'admin') {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        const seller = await sellerModel.findById(id);
        responseReturn(res, 200, { userInfo: seller });
      }
    } catch (error) {
      responseReturn(res, 500, { error: 'server error' });
    }
  };
}

module.exports = new authControllers();
