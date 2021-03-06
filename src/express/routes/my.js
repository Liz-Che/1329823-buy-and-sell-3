'use strict';

const {Router} = require(`express`);

const getMyRouter = (service) => {
  const myRouter = new Router();
  myRouter.get(`/`, async (req, res, next) => {
    try {
      const offers = await service.getAllOffers();
      return res.render(`ticket/my-tickets`, {offers});
    } catch (err) {
      return next(err);
    }
  });

  myRouter.get(`/comments`, async (req, res, next) => {
    try {
      const offers = await service.getAllOffers();
      return res.render(`main/comments`, {offers: offers.slice(0, 3)});
    } catch (err) {
      console.log(err);
      return next(err);
    }
  });
  return myRouter;
};

module.exports = {getMyRouter};
