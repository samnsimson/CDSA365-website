import { Divider, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { FC, ReactElement, useContext, useState } from "react";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import StudentMenu from "../components/student-dashboard/menu";
import {
    DashboardContainer,
    DashboardMainSection,
    SideBar,
    StyledAppBar,
    StyledButton,
    StyledContentBox,
} from "../components/styled";
import { AuthContext } from "../context/auth-context";
import { useAppSelector } from "../store/hooks";

type Props = {
    children: ReactElement;
    title?: string;
};

const StudentDashboardLayout: FC<Props> = ({ title, children }) => {
    const [showSidebar, setShowSidebar] = useState(true);
    const { data: user } = useAppSelector((state) => state.user);
    const auth = useContext(AuthContext);

    return (
        <DashboardContainer>
            <SideBar show={showSidebar}>
                <Link href={"/"}>
                    <Toolbar className="cursor-pointer">
                        <Typography variant="h6" noWrap>
                            CDSA365
                        </Typography>
                    </Toolbar>
                </Link>
                <Divider />
                <StudentMenu />
            </SideBar>
            <DashboardMainSection sidebarvisible={showSidebar}>
                <StyledAppBar
                    position="fixed"
                    color="default"
                    elevation={0}
                    sidebarvisible={showSidebar}
                >
                    <Toolbar>
                        <IconButton
                            size="medium"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setShowSidebar(!showSidebar)}
                        >
                            <FaBars />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            {title}
                        </Typography>
                        {user.isLoggedIn && (
                            <StyledButton
                                startIcon={<FaSignOutAlt />}
                                color="error"
                                onClick={() => auth?.logout()}
                            >
                                Logout
                            </StyledButton>
                        )}
                    </Toolbar>
                </StyledAppBar>
                <StyledContentBox className="p-4">{children}</StyledContentBox>
            </DashboardMainSection>
        </DashboardContainer>
    );
};

StudentDashboardLayout.defaultProps = {
    title: "Dashboard",
};

export default StudentDashboardLayout;
