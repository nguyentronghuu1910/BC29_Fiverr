import React from 'react'
import { Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import styled from 'styled-components'

export default function Search() {
    const navigate = useNavigate()

    const { Search: SearchAntd } = Input

    const onSearch = (value) => {
        navigate(`/search/${value}`)
    }

    return (
        <div className="w-25">
            <SearchAntd
                className="search"
                placeholder="What service are you looking for"
                onSearch={onSearch}
                enterButton
            />
        </div>
    )
}
