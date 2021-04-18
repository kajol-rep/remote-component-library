import { useState } from "react";
import Modal from "../func_comp/Modal";

export default function ModalDoc() {
  const [open, setOpen] = useState(null);

  function handleClose() {
    setOpen(null);
  }

  return (
    <div>
      <div className="heading bold-text">Modal</div>
      <p>
        A modal is a dialog box/popup window that is displayed on top of the
        current page, after some specified user interactivity.
      </p>
      <p className="medium-text">
        Download the component from here{" "}
        <button class="primary-outline-btn curved-edge-btn">
          <a
            href="https://wrap-it-library.netlify.app/Modal.jsx"
            class="link-btn"
            download
          >
            Download
          </a>
        </button>
      </p>
      <br />
      <span className="medium-text">Basic modal</span>
      <p>A basic modal just contains some text information inside it.</p>
      <div className="component-container">
        <button onClick={() => setOpen("simple-modal")}>Open Modal</button>
        {open === "simple-modal" && (
          <Modal open={open} onclose={handleClose}>
            A modal is a dialog box or popup window that is displayed on top of
            the current page.
          </Modal>
        )}
      </div>
      <br />
      <div className="code-container">
        <iframe
          className="iframe-container"
          title="modal"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.08%29&t=vscode&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=12.5px&lh=133%25&si=false&es=1x&wm=false&code=%253Cbutton%2520onClick%253D%257BhandleOpen%257D%253E%250A%2520%2520Open%2520Modal%250A%253C%252Fbutton%253E%250A%250A%253CModal%2520open%253D%257Bopen%257D%2520%250A%2520%2520onclose%253D%257BhandleClose%257D%253E%250A%2520%2520%2520A%2520modal%2520is%2520a%2520dialog%2520box%2520or%2520%250A%2520%2520popup%2520window%2520that%2520is%2520displayed%2520%250A%2520%2520on%2520top%2520ofthe%2520current%2520page.%250A%253C%252FModal%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />

      <span className="medium-text">Dismissable modal</span>
      <p>
        A dismissable button can be added to the modal by just passing
        dismissable as a prop to the component.
      </p>
      <div className="component-container">
        <button onClick={() => setOpen("dismissable-modal")}>Open Modal</button>
        {open === "dismissable-modal" && (
          <Modal onclose={handleClose} dismissable>
            A modal is a dialog box or popup window that is displayed on top of
            the current page.
          </Modal>
        )}
      </div>
      <br />
      <div className="code-container">
        <iframe
          className="iframe-container"
          title="modal"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.08%29&t=vscode&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=12.5px&lh=133%25&si=false&es=1x&wm=false&code=%253Cbutton%2520onClick%253D%257BhandleOpen%257D%253E%250A%2520%2520Open%2520Modal%250A%253C%252Fbutton%253E%250A%250A%253CModal%2520open%253D%257Bopen%257D%2520%250A%2520%2520onclose%253D%257BhandleClose%257D%2520%250A%2520%2520dismissable%253E%250A%2520%2520%2520A%2520modal%2520is%2520a%2520dialog%2520box%2520or%250A%2520%2520popup%2520window%2520that%2520is%2520displayed%2520%250A%2520%2520on%2520top%2520of%2520the%2520current%2520page.%250A%253C%252FModal%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />

      <span className="medium-text">Modal with title</span>
      <p>
        You can specify the title of your content inside modal by just passing
        title as a prop to the component.
      </p>
      <div className="component-container">
        <button onClick={() => setOpen("title-modal")}>Open Modal</button>
        {open === "title-modal" && (
          <Modal onclose={handleClose} title="This is Title" dismissable>
            A modal is a dialog box/popup window that is displayed on top of the
            current page.
          </Modal>
        )}
      </div>
      <br />
      <div className="code-container">
        <iframe
          className="iframe-container"
          title="modal"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.08%29&t=vscode&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=12.5px&lh=133%25&si=false&es=1x&wm=false&code=%253Cbutton%2520onClick%253D%257BhandleOpen%257D%253E%250A%2520%2520Open%2520Modal%250A%253C%252Fbutton%253E%250A%250A%253CModal%2520open%253D%257Bopen%257D%2520%250A%2520%2520onclose%253D%257BhandleClose%257D%2520%250A%2520%2520title%253D%2522This%2520is%2520Title%2522%2520%250A%2520%2520dismissable%253E%250A%2520%2520%2520A%2520modal%2520is%2520a%2520dialog%2520box%2520or%250A%2520%2520popup%2520window%2520that%2520is%2520displayed%250A%2520%2520on%2520top%2520of%2520the%2520current%2520page.%250A%253C%252FModal%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
}
