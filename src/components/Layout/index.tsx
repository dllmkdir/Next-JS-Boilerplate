import React from 'react'
import useStyles from './styles'
interface Props {

}
const Layout: React.FC<Props> = ({ children }) => {
    // @ts-ignore
    const classes = useStyles()
    return (
        <div className={classes.wrapperBox}>
            {children}
        </div>
    )
}
export default Layout