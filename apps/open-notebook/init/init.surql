DEFINE USER tipi PASS '${OPEN_NOTEBOOK_DB_PASSWORD}';
DEFINE NS open_notebook;
DEFINE DB open_notebook WITHIN open_notebook;
DEFINE SCOPE prod_scope SESSION 24h SIGNUP (CREATE user SET pass) SIGNIN (SELECT * FROM user WHERE pass = crypto::argon2::compare($pass, pass));
GRANT SELECT, CREATE, UPDATE, DELETE ON TABLE * TO tipi;