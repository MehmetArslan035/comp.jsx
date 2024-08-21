//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{backgroundColor:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

//! External css
//! CSS dosyalari dogrudan import edilir. Export edilmelerine gerek yoktur.
//? CSS dosyalari import "path" seklinde eklenir.
import "./Main.css";
import  landscape from"./img/pic.jpg"

const headerStyle = {
    color: "teal",
    backgroundColor: "lightGray",
    fontWeight:"bold",
}

const Main = () => {
  return (
    <main>
      <h2 style={{ color:"red",background:"gray" }}>Main Section</h2>
      <h3 style={headerStyle}>Other Header</h3>
      <p className="par">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, itaque
        recusandae nesciunt ut optio nam voluptas est provident quas
        perspiciatis dolorem tempora omnis consequatur dolore voluptate dolores
        harum. Dicta, nihil.
      </p>
      <p className="par2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat
        illo deserunt odit unde!
      </p>
      <div>
        <img src="https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_1280.jpg" alt="" />
      </div>

      <img className="img" src="landscape" alt="" />
      <img className="img" src="./beach.jpg" alt="" />
    </main>
  );
};
export default Main;