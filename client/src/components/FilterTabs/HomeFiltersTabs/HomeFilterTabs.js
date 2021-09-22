import React from 'react'
import './HomeFilterTabs.css'
import Button from '@mui/material/Button'

 const HomeFilterTabs = () => {

    return (
        <div className="filterTabs__container">
          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__all">all</Button>
          </span>
          
          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__free">free</Button>
          </span>

          <span className="filterTabs__tag">
            <Button variant="contained" id="filterTabs__premium">premium</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__15min"> 15min </Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__30min">30min+</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__weights">weights</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__athletics">athletics</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__dance">dance</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__yoga">yoga</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__tone">tone</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__weightloss">weigthloss</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__fullbody">full body</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__upperbody">upper body</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__lowerbody">lower body</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__sexyabs">sexy abs</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__pilates">pilates</Button>
          </span>

          <span className="filterTabs__tag">
              <Button variant="contained" id="filterTabs__hittcardio">hitt cardio</Button>
          </span>  
        </div>
    )
}

export default HomeFilterTabs





















