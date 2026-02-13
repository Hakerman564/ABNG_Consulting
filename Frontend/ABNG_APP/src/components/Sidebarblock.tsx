type SidebarblockProps = {
    children?: React.ReactNode;
    ClassName?: string;
}

const Sidebarblock = ({ children, ClassName = "" } = {} as SidebarblockProps) => {
return(
    <>
    <div className={ClassName}>
      {children}
    </div>
    </>
)
}

export default Sidebarblock;