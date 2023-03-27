const defaults = {
  methods: {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete",
  },
  versions: {
    v1: {
      version: "/api",
    },
  },
};

const endpoints = {
  getUser: {
    method: defaults.methods.GET,
    uri: "https://jsonplaceholder.typicode.com/users",
    headerProps: {},
  },
};

export default endpoints;
