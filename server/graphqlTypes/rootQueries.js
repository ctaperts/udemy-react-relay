const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } = graphql;

const UserType = require('./userType');
const UserModel = require('../mongoSchema/user');

const ViewerType = new GraphQLObjectType ({
  name: 'Viewer',
  fields: () => ({
    user: {
      type: UserType,
      resolve(args) {
        return UserModel.findOne(args)
      }
    }
  })
});

const RootQueryType = new GraphQLObjectType ({
  name: 'RootQuery',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return UserModel.find({});
      }
    },
    myuser: {
      type: ViewerType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        return args;
      }
    }
  })
});

module.exports = RootQueryType;
