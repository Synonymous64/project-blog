/* eslint-disable */
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
/* eslint-enable */
// **Importing custom document
import blog from "./document/blog";
import author from "./document/author";
import categories from "./document/categories";
import featured from "./document/featured";
// **Importing custom object
import customImage from "./objects/customImage";
import bodyText from "./objects/bodyText";
import customCode from "./objects/customCode";
import excerptText from "./objects/excerptText";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    //**Documents */
    blog,
    author,
    categories,
    featured,
    //**Objects */
    customImage,
    bodyText,
    customCode,
    excerptText,
  ]),
});
