import "./componentStyle.css";
export default function Home() {
  return (
    <div>
      <div className="text-center">
        <div className="heading bold-text">Welcome to Wrapit</div>
        <p className="medium-text">
          Build fast apps with Wrapit. Wrapit provides prebuild components and
          CSS library. You can access all of them here.
          <br />
          Take it and Wrap it to your UI!
        </p>
      </div>

      <div className="flex-row">
        <img
          alt="img"
          style={{ height: "10rem" }}
          src="https://www.seekpng.com/png/full/63-630285_cute-kawaii-marshmallow-pink-hug-soft-love-heart.png"
        />
      </div>
      <p className="medium-text">
        Before getting started include this link in your code to access the
        styles.
      </p>

      <iframe
        className="iframe-container"
        title="style"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.08%29&t=vscode&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=12.5px&lh=133%25&si=false&es=1x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520%250A%2520%2520href%253D%2522https%253A%252F%252Fwrap-it-library.netlify.%250A%2520%2520%2520%2520%2520%2520%2520%2520app%252FcomponentStyle.css%2522%253E%250A%2520%2520%250A%2540import%2520url%28%2522https%253A%252F%252Fwrap-it-library.%250A%2520%2520netlify.app%252FcomponentStyle.css%2522%29"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}
