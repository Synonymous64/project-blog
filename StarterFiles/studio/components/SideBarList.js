import S from "@sanity/desk-tool/structure-builder";
import { mdStar } from "react-icons/md";
function SideBarList() {
  return S.list()
    .title("Praj-Blog")
    .items([
      S.listItem()
        .title("Featured")
        .id("featuredItems")
        .icon(mdStar)
        .child(S.editor().schemaType("featured").documentId("featuredItems")),
        ...S.documentTypeListItems().filter(
            (item) =>item.getId() !== 'featured'
        )
    ]);
}
export default SideBarList;
