import BaseComponent from "./Basecomponent.js";

export default class Navbar extends BaseComponent {

    render() {
        let $nav = document.createElement('nav');
        $nav.className = 'navbar navbar-expand-sm bg-light navbar-light d-flex justify-content-between';

        let $navLeft = document.createElement('div');
        $navLeft.className = 'navbar-nav ms-5'

        let $brand = document.createElement('a');
        $brand.href = '#';
        $brand.className = 'navbar-brand';
        $brand.innerHTML = '<b>Chat Group</b>';

        let $navLink = document.createElement('a');
        $navLink.className = 'nav-link text-primary';
        $navLink.innerHTML = 'Home';
        $navLink.href = '#';
        $navLink.onclick = (e) => {
            e.preventDefault()
            router.navigate('/home')
        }

        $navLeft.append($brand, $navLink)

        let $navRight = document.createElement('div');
        $navRight.className = 'navbar-nav me-5'

        let $user = document.createElement('a');
        $user.className = 'nav-link bg-primary rounded text-light';
        $user.href = '#';
        $user.innerHTML = 'Wellcome'


        let $logOut = document.createElement('a');
        $logOut.className = 'nav-link text-primary';
        $logOut.href = '#';
        $logOut.innerHTML = 'SigOut';

        $navRight.append($user, $logOut);


        $nav.append($navLeft, $navRight)
        return $nav
    }
}