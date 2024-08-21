//* Harici bir dosya icerisinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima acilmis olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.

//? Header Component
//* arrow func. with default export

const Header = () => {
    //? JS alanı
    const mesaj = "Hello FS-17";
    return (
      //? JSX alanı
      <header>
        {/* JSX alanı yorum satırı */}
        {/* //* JSX içerisinde JS ifadeleri süslü parantez "{}"" içerisinde yazılır */}
        {/* //* JSX elementlerinde "class" yerine "className" kullanılır */}
        <h1 className="par">{mesaj} </h1>
      </header>
    );
  };
  
  export default Header;

//   import React from 'react'
  
//   export const Header = () => {
//     return (
//       <div>Header</div>
//     )
//   }
  

// import React from 'react'

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header