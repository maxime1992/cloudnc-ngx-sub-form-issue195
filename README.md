# CloudncNgxSubFormIssue195

This repo proves that issue https://github.com/cloudnc/ngx-sub-form/issues/195 has been solved between "6.0.0-feat-rewrite.5" and "6.0.0-feat-rewrite.7".

Demo:

- Run `yarn`
- Launch the app `yarn start`
- Go to http://localhost:4200
- See that the app is working as expected (and that all the components are using OnPush strategy)
- Try to downgrade `ngx-sub-form` version to `6.0.0-feat-rewrite.5` by running `yarn add -E ngx-sub-form@6.0.0-feat-rewrite.5`
- Launch the app again and this time you'll notice it's broken
- The fix was brought with https://github.com/cloudnc/ngx-sub-form/releases/tag/v6.0.0-feat-rewrite.6 and https://github.com/cloudnc/ngx-sub-form/releases/tag/v6.0.0-feat-rewrite.7
