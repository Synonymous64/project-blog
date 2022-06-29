/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */
import blog from './document/blog';
import author from './document/author';
// **Importing custom object
import customImage from './objects/customImage';
import bodyText from './objects/bodyText';
import customCode from './objects/customCode';
import excerptText from './objects/excerptText';
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    
    blog, author, customImage, bodyText,  customCode, excerptText,
  
  ]),
});
