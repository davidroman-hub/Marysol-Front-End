import React from 'react'
import './Footerstyles.scss'

function FooterV() {
    return (
        <footer>
            <div className = 'social'>
                <a href='https://www.facebook.com/MarySolCevicheria/' target='_blank' rel='noopener noreferrer'>
                    <i className=" fa fa-facebook"/>
                </a>

                <a href='https://www.instagram.com/cevich_marysol' target='_blank' rel='noopener noreferrer'>
                    <i className=" fa fa-instagram"/>
                </a>

              

                {/* <a href='https://www.youtube.com/channel/UCkLV4rLOnDM6pyJtzVh6UKw?view_as=subscriber' target='_blank' rel='noopener noreferrer'>
                    <i className=" fa fa-youtube"/>
                </a> */}

            </div>
            
        </footer>
    )
}

export default FooterV