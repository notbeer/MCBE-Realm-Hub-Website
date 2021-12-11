import { YellowSpan } from '../other/color';
import {
    Sidebar as SidebarContainer,
    SidebarContent,
    SidebarTitle
} from '../sidebar/sidebarElements';

export default function Sidebar({ open }: { open: boolean }) {
    return (
        <SidebarContainer id="SidebarContainer" open={open}>
            
        </SidebarContainer>
    );
};
