// import React from 'react'
import { useEffect, useState } from 'react'
import PortfolioList from '../portfoliolist/PortfolioList'
import './portfolio.scss'
import { featuredPortfolio, webPortfolio, contentPortfolio, designPortfolio, mobilePortfolio } from '../../data';

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "design", title: "Design" },
    { id: "branding", title: "Branding" },
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio)
        break;
      case "web":
        setData(webPortfolio)
        break;
      case "mobile":
        setData(mobilePortfolio)
        break;
      case "design":
        setData(designPortfolio)
        break;
      case "branding":
        setData(contentPortfolio)
        break;
      default:
        setData(featuredPortfolio)

    }
  }, [selected])



  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (<PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />))}
      </ul>
      <div className="container">
        {data.map((d)=>(
          <div className="item">
          <img className='image' src={d.img} alt="" srcset="" />
          <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}
