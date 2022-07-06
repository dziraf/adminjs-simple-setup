import React from 'react';

const Picture = (props) => {
  console.log(props);
  const url = 'https://4.img-dpreview.com/files/p/E~TS1180x0~articles/3925134721/0266554465.jpeg';

  return <img src={url} alt='picture' />
}

export default Picture;