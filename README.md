the-controller-sign
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-controller-sign
[bd_travis_url]: http://travis-ci.org/the-labo/the-controller-sign
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-controller-sign.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-controller-sign
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-controller-sign.svg?token=
[bd_license_url]: https://github.com/the-labo/the-controller-sign/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/the-labo/the-controller-sign
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/the-labo/the-controller-sign.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/the-labo/the-controller-sign.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/the-labo/the-controller-sign
[bd_gemnasium_shield_url]: https://gemnasium.com/the-labo/the-controller-sign.svg
[bd_npm_url]: http://www.npmjs.org/package/the-controller-sign
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-controller-sign.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Sign controller for the-server

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-controller-sign --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const { TheSignCtrl } = require('the-controller-sign')
const theServer = require('the-server')

async function tryExample () {
  let server = theServer({ /* ... */ })

  server.register(
    class extends TheSignCtrl { /* ... */},
    'some'
  )

  server.listen(3000)
}

tryExample().catch((err) => console.error(err))

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/10.API Guide.md.hbs" Start -->

<a name="section-doc-guides-10-a-p-i-guide-md"></a>

API Guide
-----

+ [the-controller-sign@1.1.6](./doc/api/api.md)
  + [create(args)](./doc/api/api.md#the-controller-sign-function-create)


<!-- Section from "doc/guides/10.API Guide.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-controller-sign/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][t_h_e_labo_url]

[t_h_e_labo_url]: https://github.com/the-labo

<!-- Links End -->
