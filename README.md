# Laravel Vue Sanctum SPA

Laravel and vue spa using tailwind (laravel/ui looks) for styling and sanctum for authentification

![image](https://drive.google.com/uc?export=view&id=1E-hlDaiSC248fMzmtivjQJprTY_qJVUA)


## Features

-   Laravel 8
-   Vue + VueRouter + Vuex
-   Login, register, update profile
-   password reset
-   Authentication with Sanctum
-   Tailwind + Heroicons

## Installation

-   `git clone git@github.com:HijenHEK/laravel-vue-sanctum-spa.git --branch v1.0.1 my-spa`  set verion and app name 
-   `cd my-spa`
-   Edit `.env` and set your database connection details and **your APP_URL** 
-   `php artisan key:generate`
-   `php artisan migrate`
-   `npm install`
-   `npm run dev`

### mailer
-   set up mailer details
-   put **QUEUE_CONNECTION=database** 
## Notes
- make sure your domain is included in the statefull allowed domains (app/config/sanctum.php) to avoid [Unauthorised domains issue #3](/../../issues/3).

## Usage

#### Development

```bash
npm run watch

```

#### Production

```bash
npm run production
```
- turn off debug mode **.env**
##

Highly inspired by [laravel-vue-spa by cretueusebiu](https://github.com/cretueusebiu/laravel-vue-spa) where it uses bootstrap 4 fontawesome and JWT for authentification

##

> Other features are under development coming soon :fire:


# UI preview

![image](https://drive.google.com/uc?export=view&id=1mTeWNVOaqEl2437lHtgiNcb6dfTj6KZ6)
![image](https://drive.google.com/uc?export=view&id=177_rm40cjacxza19Ue68dVQUizeKQxJy)
![image](https://drive.google.com/uc?export=view&id=1D4Hr3X97GuFmsd6mh3nzahx6VhciXI3a)
