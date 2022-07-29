/* eslint-disable */
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
/* eslint-enable */
// **Importing custom document
import blog from "./document/blog";
import author from "./document/author";
// import categories from "./document/categories";
import category from "./document/category";
import featured from "./document/featured";
// **Importing custom object
import customImage from "./objects/customImage";
import richText from "./objects/richText";
import customCode from "./objects/customCode";
import normalText from "./objects/normalText";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    //**Documents */
    blog,
    author,
    category,
    featured,
    //**Objects */
    customImage,
    richText,
    customCode,
    normalText,
  ]),
});
