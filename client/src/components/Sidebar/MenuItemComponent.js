import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'simple-flexbox'

const MenuItemComponent = (props) => {

    const { active, icon, title } = props
    const Icon = icon 

    return(
        <Row vertical="center">
            <Icon fill={active && "#DDE2FF"} opacity={!active && "0.4"} />
            <span className={ active ? 'activeTitle' : 'menuTitle' }>{title}</span>
        </Row>
    )
}

MenuItemComponent.propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.func,
    title: PropTypes.string
}

export default MenuItemComponent