import React, { useState } from 'react';
export default function ReadMore() {
  const fullText =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa alias explicabo officia exercitationem, voluptate, eaque dolore aut ex enim et! Architecto quam dicta possimus laboriosam. Reprehenderit magnam repellat veniam commodi quaerat sequi! Fuga minima ut quibusdam illo error asperiores neque vero! Deleniti, repellat.Quasi corporis aspernatur ex, magnam quae sit quo. Molestias quis exercitationem nulla sint similique molestiae ea, earum voluptatem modi ratione aliquam adipisci autem recusandae aspernatur saepe ipsam veritatis corporis est eaque expedita? Animi iusto nostrum unde laborum consectetur cupiditate architecto autem placeat enim vitae a voluptatem adipisci beatae voluptate ut debitis, aperiam quas iure provident pariatur eius nobis eum quod cum. Eaque iure provident esse architecto vel recusandae omnis accusamus aliquid corrupti blanditiis quasi qui ratione, nesciunt eius ipsum sit? Expedita aut modi illum eius nisi saepe consectetur ab, dolorem, non illo perferendis aliquid quasi voluptates? Iste modi ullam quibusdam, est minima expedita dolore vitae at, in itaque, delectus repellendus laborum ea veniam aut suscipit. Ipsum reiciendis numquam doloremque, minima excepturi, aliquid porro exercitationem quibusdam illo inventore quasi delectus sint tempore consectetur nesciunt dolore! Ea delectus libero facilis repellendus corporis odit voluptatum voluptate illum explicabo cum tenetur fugit minus repudiandae possimus impedit nesciunt, corrupti animi ullam?';

  const [More, setMore] = useState(false);
  const [displayText, setDisplayText] = useState(fullText.substring(0, 150));

  function readMore() {
    if (More) {
      setDisplayText(fullText.substring(0, 150));
    } else {
      setDisplayText(fullText);
    }
    setMore(!More);
  }

  return (
    <div className="container mt-4">
      {displayText}
      <button className="btn btn-primary  mx-4" onClick={readMore}>
        {More ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}
