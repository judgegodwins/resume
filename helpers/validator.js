
module.exports = (schema, source = 'body') => ( req, res, next ) => {
  // console.log('source: ', source);
  console.log(req.body);
  const { error } = schema.validate(req[source]);

  if (!error) return next();

  const { details } = error;

  const message = details.map((i) => i.message.replace(/['"]+/g, '')).join(',');

  return res.status(400).json({ success: false, message });
}