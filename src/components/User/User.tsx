import { Card, Typography } from "@mui/material"


const User = ( {firstName, lastName}: {firstName: string, lastName: string} ) => {
  return (
    <Card>
      <Typography>{firstName}</Typography>
      <Typography>{lastName}</Typography>
    </Card>
  )
}

export default User