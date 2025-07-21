import Image from "next/image";

const AnimationPage = () => {
  return (
    <main>
      <header>
        <Image src="/images/5.png" alt="" width={100} height={40} />
        <Image src="/images/6.png" alt="" width={100} height={40} />
      </header>

      <section className="banner">
        <div className="content">
          <h1 className="left">CSS ONLY</h1>
          <div className="right">
            <h2>LUNDEV</h2>
            <p>Web Design</p>
            <p>
              Don&apost forget to subscribe to the channel to continuously
              <br />
              update interesting videos
            </p>
          </div>
          <div className="image">
            <Image src="/images/mouth.png" alt="" width={300} height={300} />
          </div>
        </div>
      </section>

      <section className="grid grid-1">
        <figure>
          <Image src="/images/sich.png" alt="" width={400} height={300} />
        </figure>
        <figure>
          <Image
            src="/images/3.png"
            alt=""
            className="autoRotate"
            width={300}
            height={300}
          />
        </figure>
        <h2 className="autoShow">Introduce</h2>
      </section>

      <section className="grid grid-2">
        <div className="autoShow">
          <figure>
            <Image src="/images/6.png" alt="" width={300} height={300} />
          </figure>
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen b
            <br />
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop like.
          </p>
        </div>

        <div className="autoShow">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry &apos s standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen b
          <br />
          ook. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. printer took a galley of type and scrambled it to make a type
          specimen b
          <br />
          ook. It has survived not only five centuries, but also the leap into
          electronic typesetting, remai
        </div>

        <div className="autoShow">
          <figure>
            <Image src="/images/2.png" alt="" width={300} height={300} />
          </figure>
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen b
            <br />
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        <div className="autoShow">
          <figure>
            <Image src="/images/candy.png" alt="" width={300} height={300} />
          </figure>
        </div>
      </section>

      <section className="grid grid-3">
        <div className="autoBLur">LUNDEV</div>
        <div className="autoBLur">DESIGNER</div>
        <div className="autoBLur">DEVELOPER</div>
        <div className="autoBLur">SUBSCRIBE +</div>
        <div className="autoBLur">SEE MORE &#8599;</div>
      </section>
    </main>
  );
};

export default AnimationPage;
