# the-controller-sign@1.1.0

Sign controller for the-server

+ Functions
  + [create(args)](#the-controller-sign-function-create)
+ [`TheSignCtrl`](#the-controller-sign-classes) Class
  + [new TheSignCtrl()](#the-controller-sign-classes-the-sign-ctrl-constructor)
  + [ctrl.signup(name, password, otherAttributes)](#the-controller-sign-classes-the-sign-ctrl-signup)
  + [ctrl.signin(name, password, options)](#the-controller-sign-classes-the-sign-ctrl-signin)
  + [ctrl.signout()](#the-controller-sign-classes-the-sign-ctrl-signout)
  + [ctrl.getSigned()](#the-controller-sign-classes-the-sign-ctrl-getSigned)
  + [ctrl.syncSigned()](#the-controller-sign-classes-the-sign-ctrl-syncSigned)
  + [ctrl.assertSigned()](#the-controller-sign-classes-the-sign-ctrl-assertSigned)
  + [ctrl.assertPassword(password)](#the-controller-sign-classes-the-sign-ctrl-assertPassword)

## Functions

<a class='md-heading-link' name="the-controller-sign-function-create" ></a>

### create(args) -> `TheSignCtrl`

Create a TheSignCtrl instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="the-controller-sign-classes"></a>

## `TheSignCtrl` Class

Sign controller for the-server

**Extends**: 

+ `TheCtrl`



<a class='md-heading-link' name="the-controller-sign-classes-the-sign-ctrl-constructor" ></a>

### new TheSignCtrl()

Constructor of TheSignCtrl class



<a class='md-heading-link' name="the-controller-sign-classes-the-sign-ctrl-signup" ></a>

### ctrl.signup(name, password, otherAttributes) -> `Promise.<UserEntity>`

Sign up

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name to identify user |
| password | string | Password |
| otherAttributes | Object | Other attributes |


<a class='md-heading-link' name="the-controller-sign-classes-the-sign-ctrl-signin" ></a>

### ctrl.signin(name, password, options) -> `Promise.<UserEntity>`

Signin

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name to identify user |
| password | string | Password |
| options | Object | Optional settings |


<a class='md-heading-link' name="the-controller-sign-classes-the-sign-ctrl-signout" ></a>

### ctrl.signout() -> `Promise.<boolean>`

Signout

<a class='md-heading-link' name="the-controller-sign-classes-the-sign-ctrl-getSigned" ></a>

### ctrl.getSigned() -> `Promise.<UserEntity>`

Get signed

<a class='md-heading-link' name="the-controller-sign-classes-the-sign-ctrl-syncSigned" ></a>

### ctrl.syncSigned() -> `Promise.<boolean>`

Sync signed

<a class='md-heading-link' name="the-controller-sign-classes-the-sign-ctrl-assertSigned" ></a>

### ctrl.assertSigned() -> `Promise`

Assert signed

<a class='md-heading-link' name="the-controller-sign-classes-the-sign-ctrl-assertPassword" ></a>

### ctrl.assertPassword(password) -> `Promise.<void>`

Assert password

| Param | Type | Description |
| ----- | --- | -------- |
| password |  |  |




