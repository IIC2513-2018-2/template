const config = {
  default: {
    username: "api",
    password: "capstone2019",
    dialect: 'postgres',
    database: "agroboltmobile",
    host:  "ec2-52-67-250-126.sa-east-1.compute.amazonaws.com",
  },
  development: {
    extend: 'default',
    database: "agroboltmobile",
  },
  test: {
    extend: 'default',
    database: 'iic2513template_test',
  },
  production: {
    extend: 'default',
    database: "agroboltmobile",
  },
};

Object.keys(config).forEach((configKey) => {
  const configValue = config[configKey];
  if (configValue.extend) {
    config[configKey] = Object.assign({}, config[configValue.extend], configValue);
  }
});

module.exports = config;