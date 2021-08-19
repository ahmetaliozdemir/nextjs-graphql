(function() {
var exports = {};
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./pages/api/graphql.js":
/*!******************************!*\
  !*** ./pages/api/graphql.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* binding */ config; }
/* harmony export */ });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ "apollo-server-micro");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);


const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();
const typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`
  type BlogPost {
    id: String
    text: String
  }

  type Query {
    blogPosts: [BlogPost]
  }

  type Mutation {
    addBlogPost(text: String): BlogPost
    deleteBlogPost(id: String): BlogPost
  }
`;
const resolvers = {
  Query: {
    blogPosts: (_parent, _args, _context) => {
      return prisma.blogPost.findMany();
    }
  },
  Mutation: {
    addBlogPost: (_parent, {
      text
    }, _context) => {
      return prisma.blogPost.create({
        data: {
          text
        }
      });
    },
    deleteBlogPost: (_parent, {
      id
    }, _context) => {
      return prisma.blogPost.delete({
        where: {
          id: id
        }
      });
    }
  }
};
const apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({
  typeDefs,
  resolvers
});
const handler = apolloServer.createHandler({
  path: "/api/graphql"
});
const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-server-micro");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFwaHFsLWJsb2cvLi9wYWdlcy9hcGkvZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly9ncmFwaHFsLWJsb2cvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL2dyYXBocWwtYmxvZy9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItbWljcm9cIiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJ0eXBlRGVmcyIsImdxbCIsInJlc29sdmVycyIsIlF1ZXJ5IiwiYmxvZ1Bvc3RzIiwiX3BhcmVudCIsIl9hcmdzIiwiX2NvbnRleHQiLCJibG9nUG9zdCIsImZpbmRNYW55IiwiTXV0YXRpb24iLCJhZGRCbG9nUG9zdCIsInRleHQiLCJjcmVhdGUiLCJkYXRhIiwiZGVsZXRlQmxvZ1Bvc3QiLCJpZCIsImRlbGV0ZSIsIndoZXJlIiwiYXBvbGxvU2VydmVyIiwiQXBvbGxvU2VydmVyIiwiaGFuZGxlciIsImNyZWF0ZUhhbmRsZXIiLCJwYXRoIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixFQUFmO0FBRUEsTUFBTUMsUUFBUSxHQUFHQyxvREFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZEE7QUFlQSxNQUFNQyxTQUFTLEdBQUc7QUFDaEJDLE9BQUssRUFBRTtBQUNMQyxhQUFTLEVBQUUsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQWlCQyxRQUFqQixLQUE4QjtBQUN2QyxhQUFPVCxNQUFNLENBQUNVLFFBQVAsQ0FBZ0JDLFFBQWhCLEVBQVA7QUFDRDtBQUhJLEdBRFM7QUFNaEJDLFVBQVEsRUFBRTtBQUNSQyxlQUFXLEVBQUUsQ0FBQ04sT0FBRCxFQUFVO0FBQUVPO0FBQUYsS0FBVixFQUFvQkwsUUFBcEIsS0FBaUM7QUFDNUMsYUFBT1QsTUFBTSxDQUFDVSxRQUFQLENBQWdCSyxNQUFoQixDQUF1QjtBQUFFQyxZQUFJLEVBQUU7QUFBRUY7QUFBRjtBQUFSLE9BQXZCLENBQVA7QUFDRCxLQUhPO0FBSVJHLGtCQUFjLEVBQUUsQ0FBQ1YsT0FBRCxFQUFVO0FBQUVXO0FBQUYsS0FBVixFQUFrQlQsUUFBbEIsS0FBK0I7QUFDN0MsYUFBT1QsTUFBTSxDQUFDVSxRQUFQLENBQWdCUyxNQUFoQixDQUF1QjtBQUM1QkMsYUFBSyxFQUFFO0FBQ0xGLFlBQUUsRUFBRUE7QUFEQztBQURxQixPQUF2QixDQUFQO0FBS0Q7QUFWTztBQU5NLENBQWxCO0FBb0JBLE1BQU1HLFlBQVksR0FBRyxJQUFJQyw2REFBSixDQUFpQjtBQUFFcEIsVUFBRjtBQUFZRTtBQUFaLENBQWpCLENBQXJCO0FBRUEsTUFBTW1CLE9BQU8sR0FBR0YsWUFBWSxDQUFDRyxhQUFiLENBQTJCO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQTNCLENBQWhCO0FBRU8sTUFBTUMsTUFBTSxHQUFHO0FBQUVDLEtBQUcsRUFBRTtBQUFFQyxjQUFVLEVBQUU7QUFBZDtBQUFQLENBQWY7QUFFUCwrREFBZUwsT0FBZixFOzs7Ozs7Ozs7OztBQzlDQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxpRCIsImZpbGUiOiJwYWdlcy9hcGkvZ3JhcGhxbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgQXBvbGxvU2VydmVyIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItbWljcm9cIjtcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5jb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuICB0eXBlIEJsb2dQb3N0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIHRleHQ6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgdHlwZSBRdWVyeSB7XHJcbiAgICBibG9nUG9zdHM6IFtCbG9nUG9zdF1cclxuICB9XHJcblxyXG4gIHR5cGUgTXV0YXRpb24ge1xyXG4gICAgYWRkQmxvZ1Bvc3QodGV4dDogU3RyaW5nKTogQmxvZ1Bvc3RcclxuICAgIGRlbGV0ZUJsb2dQb3N0KGlkOiBTdHJpbmcpOiBCbG9nUG9zdFxyXG4gIH1cclxuYDtcclxuY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBibG9nUG9zdHM6IChfcGFyZW50LCBfYXJncywgX2NvbnRleHQpID0+IHtcclxuICAgICAgcmV0dXJuIHByaXNtYS5ibG9nUG9zdC5maW5kTWFueSgpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIE11dGF0aW9uOiB7XHJcbiAgICBhZGRCbG9nUG9zdDogKF9wYXJlbnQsIHsgdGV4dCB9LCBfY29udGV4dCkgPT4ge1xyXG4gICAgICByZXR1cm4gcHJpc21hLmJsb2dQb3N0LmNyZWF0ZSh7IGRhdGE6IHsgdGV4dCB9IH0pO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZUJsb2dQb3N0OiAoX3BhcmVudCwgeyBpZCB9LCBfY29udGV4dCkgPT4ge1xyXG4gICAgICByZXR1cm4gcHJpc21hLmJsb2dQb3N0LmRlbGV0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGFwb2xsb1NlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoeyB0eXBlRGVmcywgcmVzb2x2ZXJzIH0pO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFwb2xsb1NlcnZlci5jcmVhdGVIYW5kbGVyKHsgcGF0aDogXCIvYXBpL2dyYXBocWxcIiB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7IGFwaTogeyBib2R5UGFyc2VyOiBmYWxzZSB9IH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1taWNyb1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==