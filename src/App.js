import FirstLevel from "./Common/FirstLevel/FirstLevel.tsx";
import Mobile from "./Common/Mobile/Mobile.tsx";
import SecondLevel from "./Common/SecondLevel/SecondLevel.tsx";
import ThirdLevel from "./Common/ThirdLevel/ThirdLevel.tsx";
import FourthLevel from "./Common/FourtLevel/FourtLevel.tsx";
import FiveLevel from "./Common/FiveLevel/FiveLevel.tsx";
import SixthLevel from "./Common/SixthLevel/SixthLevel.tsx";
import Modal from "./Common/Modal/Modal.tsx";
import {useState, useEffect} from "react";
import './App.css'
function App() {
    const [modal, setModal] = useState(false);
    const setActiveModal = () =>{
        setModal(!modal);
        console.log(1)
    }
    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    useEffect(() => {
        window.onresize = () => {setWindowWidth(window.screen.width)};
        return () => {window.onresize = false};
    }, [windowWidth]);
    const mobile = windowWidth < 450;
  return (
    <div className="App">
        {!mobile &&
        <FirstLevel
            setActiveModal={setActiveModal}
        />
        }
        {mobile &&
        <Mobile
            setActiveModal={setActiveModal}
        />
        }
        <Modal
            activity={modal}
            setActiveModal={setActiveModal}
        />
      <section
          style={{
            position: "relative",
            height: "1000px",
            width: "100%",
            background: "#141414"
          }}
      >
        <SecondLevel/>
      </section>
        <section
            style={{
                position: "relative",
                height: "1000px",
                width: "100%",
                background: "#141414"
            }}
        >
            <ThirdLevel/>
        </section>
        <section
            style={{
                position: "relative",
                height: "1000px",
                width: "100%",
                background: "#141414"
            }}
        >
            <FourthLevel/>
        </section>
        <section className={'six'}
            style={{
                position: "relative",
                width: "100%",
                background: "#141414"
            }}
        >
            <FiveLevel/>
        </section>
        <section
            style={{
                position: "relative",
                height: "1000px",
                width: "100%",
                background: "#141414"
            }}
        >
            <SixthLevel/>
        </section>
    </div>
  );
}

export default App;
