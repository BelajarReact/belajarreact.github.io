import React from "react";

export default function Home() {
  let args = [
    "roti",
    "susu",
    "biskuit",
    "sayur",
    "daging",
    "ikan",
    "kacang",
    "sambal"
  ];

  const List = args.map((item, index) => (
    <div className="col-6" key={index} style={{ marginBottom: "20px" }}>
      <div className="card">
        <img src="https://picsum.photos/id/133/200/300" />
        <div className="card-body">
          <h4>{item}</h4>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <header>
        <h3>ini adalah halaman Beranda</h3>
      </header>
      <div className="row">{List}</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam
        turpis nisl, nec posuere nisi faucibus sed. Duis euismod lectus lectus,
        eget mattis eros varius iaculis. Aenean id scelerisque nunc. Quisque
        pretium, felis at condimentum laoreet, sem ex pulvinar tellus, in
        consequat lectus odio eget risus. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Morbi sodales,
        eros non rutrum cursus, justo ex rhoncus diam, nec semper lectus erat
        vitae nisi. Donec id accumsan urna. Curabitur commodo ex at dolor
        congue, in ornare tortor porta. Integer facilisis bibendum enim eget
        malesuada. Nulla elit tellus, fermentum a nisi ut, laoreet placerat mi.
        Praesent elit mauris, dignissim id facilisis sed, molestie id nisl.
        Fusce dictum ultricies ipsum vel efficitur.
      </p>
    </div>
  );
}
