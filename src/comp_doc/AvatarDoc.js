import Avatar from "../func_comp/Avatar";

export default function AvatarDoc() {
  return (
    <div>
      <div className="heading bold-text">Avatar</div>
      <p>
        The Avatar component is used to represent a user, and displays the
        profile picture, initials or fallback icon.
      </p>
      <p className="medium-text">
        Download the component from here{" "}
        <button class="primary-outline-btn curved-edge-btn">
          <a
            href="https://wrap-it-library.netlify.app/Avatar.jsx"
            class=" link-btn"
            download
          >
            Download
          </a>
        </button>
      </p>
      <br />
      <span className="medium-text">Image avatars</span>
      <p>
        Image props can be created by just passing image src and alt as props to
        the component.
      </p>
      <div className="component-container flex-row">
        <Avatar
          src="https://avatarfiles.alphacoders.com/699/thumb-69905.png"
          alt="profile image"
        ></Avatar>
        <Avatar
          src="https://pbs.twimg.com/profile_images/1061097093815721984/KoMkQQ1t_400x400.jpg"
          alt="profile image"
        ></Avatar>
        <Avatar
          src="https://uploads.scratch.mit.edu/users/avatars/51686077.png"
          alt="profile image"
        ></Avatar>
      </div>
      <br />
      <div className="code-container">
        <iframe
          className="iframe-container"
          title="avatar"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.08%29&t=vscode&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=12.5px&lh=133%25&si=false&es=1x&wm=false&code=%253CAvatar%250A%2520%2520src%253D%2522https%253A%252F%252Favatarfiles.alphacoders.%250A%2520%2520%2520%2520%2520%2520%2520com%252F699%252Fthumb-69905.png%2522%250A%2520%2520alt%253D%2522profile%2520image%2522%250A%2520%2520size%253D%252230px%2522%250A%2520%253E%253C%252FAvatar%253E%250A%253CAvatar%250A%2520%2520src%253D%2522https%253A%252F%252Favatarfiles.alphacoders.%250A%2520%2520%2520%2520%2520%2520%2520com%252F699%252Fthumb-69905.png%2522%250A%2520%2520alt%253D%2522profile%2520image%2522%250A%2520%2520size%253D%252250px%2522%250A%2520%2520%253E%253C%252FAvatar%253E%250A%253CAvatar%250A%2520%2520src%253D%2522https%253A%252F%252Favatarfiles.alphacoders.%250A%2520%2520%2520%2520%2520%2520%2520com%252F699%252Fthumb-69905.png%2522%250A%2520%2520alt%253D%2522profile%2520image%2522%250A%2520%2520size%253D%252270px%2522%250A%2520%253E%253C%252FAvatar%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Letter avatars</span>
      <p>Letter avatars can be created by passing any string as children.</p>
      <div className="component-container flex-row">
        <Avatar>N</Avatar>
        <Avatar>EO</Avatar>
        <Avatar>G</Avatar>
      </div>
      <br />
      <div className="code-container ">
        <iframe
          className="iframe-container"
          title="avatar"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.08%29&t=vscode&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=12.5px&lh=133%25&si=false&es=1x&wm=false&code=%253CAvatar%253EN%253C%252FAvatar%253E%250A%253CAvatar%253EEO%253C%252FAvatar%253E%250A%253CAvatar%253EG%253C%252FAvatar%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Avatar sizes</span>
      <p>
        You can set the size of your avatars by just passing size as prop to the
        component.
      </p>
      <div className="component-container flex-row">
        <Avatar
          src="https://avatarfiles.alphacoders.com/699/thumb-69905.png"
          alt="profile image"
          size="30px"
        ></Avatar>
        <Avatar
          src="https://avatarfiles.alphacoders.com/699/thumb-69905.png"
          alt="profile image"
          size="50px"
        ></Avatar>
        <Avatar
          src="https://avatarfiles.alphacoders.com/699/thumb-69905.png"
          alt="profile image"
          size="70px"
        ></Avatar>
      </div>
      <br />
      <div className="code-container">
        <iframe
          className="iframe-container"
          title="avatar"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.08%29&t=vscode&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=12.5px&lh=133%25&si=false&es=1x&wm=false&code=%253CAvatar%250A%2520%2520src%253D%2522https%253A%252F%252Favatarfiles.alphacoders.%250A%2520%2520%2520%2520%2520%2520%2520com%252F699%252Fthumb-69905.png%2522%250A%2520%2520alt%253D%2522profile%2520image%2522%250A%2520%2520size%253D%252230px%2522%250A%2520%253E%253C%252FAvatar%253E%250A%253CAvatar%250A%2520%2520src%253D%2522https%253A%252F%252Favatarfiles.alphacoders.%250A%2520%2520%2520%2520%2520%2520%2520com%252F699%252Fthumb-69905.png%2522%250A%2520%2520alt%253D%2522profile%2520image%2522%250A%2520%2520size%253D%252250px%2522%250A%2520%253E%253C%252FAvatar%253E%250A%253CAvatar%250A%2520%2520src%253D%2522https%253A%252F%252Favatarfiles.alphacoders.%250A%2520%2520%2520%2520%2520%2520%2520com%252F699%252Fthumb-69905.png%2522%250A%2520%2520alt%253D%2522profile%2520image%2522%250A%2520%2520size%253D%252270px%2522%250A%2520%253E%253C%252FAvatar%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Variants of avatar</span>
      <p>
        You can have variants in avatar. Achieve this by just passing variant
        equal to either cricle or square as props to the component.
      </p>
      <div className="component-container flex-row">
        <Avatar variant="square">KS</Avatar>
        <Avatar
          src="https://avatarfiles.alphacoders.com/699/thumb-69905.png"
          alt="profile image"
          variant="square"
        />
      </div>
      <br />
      <div className="code-container">
        <iframe
          className="iframe-container"
          title="avatar"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.08%29&t=vscode&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=12.5px&lh=133%25&si=false&es=1x&wm=false&code=%253CAvatar%2520variant%253D%2522square%2522%253EKS%253C%252FAvatar%253E%250A%253CAvatar%250A%2520%2520src%253D%2522https%253A%252F%252Favatarfiles.alphacoders.%250A%2520%2520%2520%2520%2520%2520%2520com%252F699%252Fthumb-69905.png%2522%250A%2520%2520alt%253D%2522profile%2520image%2522%250A%2520%2520variant%253D%2522square%2522%250A%2520%252F%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <br />
      <br />
      <span className="medium-text">Colors in avatar</span>
      <p>
        You can change color of your avatar by just passing color as a prop to
        the component.
      </p>
      <div className="component-container flex-row">
        <Avatar variant="square" color="skyblue">
          Ne
        </Avatar>
        <Avatar variant="square" color="purple">
          oG
        </Avatar>
      </div>
      <br />
      <div className="code-container">
        <iframe
          className="iframe-container"
          title="avatar"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0.08%29&t=vscode&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=12.5px&lh=133%25&si=false&es=1x&wm=false&code=%253CAvatar%2520variant%253D%2522square%2522%2520%250A%2520%2520color%253D%2522skyblue%2522%253E%250A%2520%2520%2520%2520Ne%250A%253C%252FAvatar%253E%250A%253CAvatar%2520variant%253D%2522square%2522%2520%250A%2520%2520color%253D%2522purple%2522%253E%250A%2520%2520%2520%2520oG%250A%253C%252FAvatar%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
}
