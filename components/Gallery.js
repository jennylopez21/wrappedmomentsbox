import Image from 'next/image';

export default function Gallery({ t }) {
  return (
    <section id="gallery">
      <h2>{t.gallery}</h2>
      <div className="gallery">
        <Image src="/giftbox1.jpg" alt="Sample gift box 1" width={270} height={180} />
        <Image src="/giftbox2.jpg" alt="Sample gift box 2" width={270} height={180} />
        {/* Agrega más imágenes según lo necesites */}
      </div>
    </section>
  );
}
