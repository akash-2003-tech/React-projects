import chefLogo from "../assets/chef-claude-icon.png";

export default function Header(){
  return(
    <header>
      <img src={chefLogo} alt="Agent logo" />
      <h1>Chef Agent</h1>
    </header>
  )
}