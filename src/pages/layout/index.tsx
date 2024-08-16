import {Stack} from 'react-bootstrap'
import {Outlet} from 'react-router-dom'

import {Header} from '@app/components/common'
import './style.css'

function Layout() {
    return (
        <Stack gap={3}>
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </Stack>
    )
}

export default Layout
