import { useRef, useState } from "react";
import "./App.css";
import BinanceWebSocket from "./components/BinanceWebSocket";
import InvestComponent from "./components/InvestComponent";
import { COIN_PAIRS } from "./data/data";
import { RxTriangleDown } from "react-icons/rx";
import CoinModal from "./components/CoinModal";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [coin, setCoin] = useState("ethusdt");
  const [loading, setLoading] = useState(true);
  const [coinPrice, setCoinPrice] = useState(null);
  const [modal, setModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const overlayRef = useRef(null);

  const handleChange = (coinChange) => {
    setCoin(coinChange);
    setLoading(true);
  };

  const handleLoading = () => {
    setLoading(false);
  };

  const handleCoinPrice = (value) => {
    setCoinPrice(value);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleClick = (e) => {
    if (e.target === overlayRef.current) setModal(false);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  const opeSidebar = () => {
    setSidebar(true);
  };

  return (
    <>
      <Navbar opeSidebar={opeSidebar} />

      <Sidebar closeSidebar={closeSidebar} sidebar={sidebar} />
      <div className="w-screen h-[calc(100vh-45px)] relative [&_input]:my-2 font-poppins">
        <img
          src="/union24-lvs.svg"
          className="w-72 lg:w-[350px] absolute inset-0 mx-auto my-auto"
          alt=""
        />
        <div className="flex flex-col justify-center w-72 lg:w-[350px]   p-6 absolute h-fit inset-0 mx-auto my-auto  ">
          <div className="relative">
            <span className="w-[42px] h-[42px] lg:w-[50px] lg:h-[50px] absolute -top-[48px] sm:-top-[45px] lg:-top-[60px] rounded-full   mx-auto inset-0 bg-[#1C1731] flex items-center justify-center">
              <img
                src={COIN_PAIRS.find((x) => x.value === coin).image}
                className="w-8"
                alt=""
              />
            </span>
            <BinanceWebSocket
              coin={coin}
              handleLoading={handleLoading}
              loading={loading}
              coinPrice={coinPrice}
              handleCoinPrice={handleCoinPrice}
            />

            <button
              className="w-full block w-full bg-[#1C1731] rounded-md py-2 px-3 w-full outline-none text-sm   text-[#6F6F7E] flex items-center justify-between my-2"
              onClick={handleModal}
            >
              <span className="flex item-center gap-2">
                <img
                  src={COIN_PAIRS.find((x) => x.value === coin).image}
                  className="w-6"
                  alt=""
                />
                <span className="flex items-center">
                  {COIN_PAIRS.find((x) => x.value === coin).name}
                </span>
              </span>
              <span>
                <RxTriangleDown />
              </span>
            </button>
            <span className="text-xs text-[#ffffff] lg:my-2 font-thin">
              Amount you want to invest
            </span>
            <InvestComponent coinPrice={coinPrice} />
            <button className="w-full text-white font-semibold CSSBg-color px-2 py-3 rounded-full text-xs lg:mt-8">
              Buy
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <CoinModal
          handleClick={handleClick}
          overlayRef={overlayRef}
          handleModal={handleModal}
          coin={coin}
          handleChange={handleChange}
        />
      )}
    </>
  );
}

export default App;
