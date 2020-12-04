function LogOutButton({handleSession}) {

    handleSession(null)
  
    return (<ThemeProvider theme={textTheme} >
                <Button variant="contained" color="secondary" to="/login?logOut" component={Link} >
                   LogOut
                </Button>
           </ThemeProvider>)
}