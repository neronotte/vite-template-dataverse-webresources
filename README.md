# _neronotte's / vite-template-dataverse-webresources / home

This template can be used to easily scaffold a dataverse webresource that can be used  
as a custom home page for your **Model Driven Apps**, with a standardized structure and layout.

The contents of the webresources can be customized **without changing the webresource itself**:
you can simply create a JS configuration file and pass it as an input to the current webresource.

## Structure of the config file

The config file must be a valid ES6 module that **exports** a `const` object called `config`.

### Config object

| Name | Type | Required | Description |
|------|------|----------|-------------|
| **title** | String | Yes | The title of the page |
| **titles** | Array of **Translation** | No | [optional] using this node you can provide additional translations to the page title. The interface will adapt basing on the user language. |
| **description** | String | No | [optional] a descriptive text that will appear below the page title |
| **descriptions** | Array of **Translation** | No | [optional] using this node you can provide additional translations to the description. The interface will adapt basing on the user language. |
| **items** | Array of **PageItem** | Yes | The items to be displayed in the home page |

### PageItem object

Each **PageItem** object has a different structure that depends on what it represents. The only attribute in common is:

| Name | Type | Required | Description |
|------|------|----------|-------------|
| **type** | String | Yes | The type of item to show. Can assume the following values: Table, WebResource or Url |

#### PageItems of type Table

In the **PageItems** of type **Table**, the content title is taken directly from the table metadata.

| Name | Type | Required | Description |
|------|------|----------|-------------|
| **type** | String | Yes | Fixed: **Table** |
| **name** | String | Yes | The schema name of the table to show |
| **description** | String | No | [optional] a descriptive text that will appear below the table name |
| **descriptions** | Array of **Translation** | No | [optional] using this node you can provide additional translations to the description. The interface will adapt basing on the user language. |

#### PageItems of type WebResource

| Name | Type | Required | Description |
|------|------|----------|-------------|
| **type** | String | Yes | Fixed: **WebResource** |
| **name** | String | Yes | The unique name of the webresource to show |
| **title** | String | Yes | The title of the webresource. |
| **titles** | Array of **Translation** | No | [optional] using this node you can provide additional translations to the webresource title. The interface will adapt basing on the user language. |
| **description** | String | No | [optional] a descriptive text that will appear below the webresource name |
| **descriptions** | Array of **Translation** | No | [optional] using this node you can provide additional translations to the description. The interface will adapt basing on the user language. |

#### PageItems of type Url

| Name | Type | Required | Description |
|------|------|----------|-------------|
| **type** | String | Yes | Fixed: **Url** |
| **url** | String | Yes | The URL to open |
| **title** | String | Yes | The title of the webresource. |
| **titles** | Array of **Translation** | No | [optional] using this node you can provide additional translations to the webresource title. The interface will adapt basing on the user language. |
| **description** | String | No | [optional] a descriptive text that will appear below the webresource name |
| **descriptions** | Array of **Translation** | No | [optional] using this node you can provide additional translations to the description. The interface will adapt basing on the user language. |

### Translation object

| Name | Type | Required | Description |
|------|------|----------|-------------|
| **lcid** | Number | Yes | Locale ID of the language of the current translation |
| **label** | String | Yes | The text to show |

### Example

You can find a sample config in the current repo `config-template.js` file.

## Passing the config file name to the webresource

You have two different methods to instruct the webresource on which webresource file to use as `config` file.

- **Dynamic way**: works if you're accessing the home page via `Xrm.Navigation.openWebResource` or by creating the URL manually. Does not work when the page is opened from the sitemap.
- **Static way**: As of now it's the only way if you plan to add the Home Page into the sitemap.

The home page will check for the dynamic way first. If not found, will look into the static way. If no configuration is provided, an error will be displayed.

### Dynamic way

You can simply pass the uniquename of the webresource containing the config file in the `data=` querystring argument.

Example (plain):

```Url
ava_/home/index.html?data=ava_config.js
```

Example (using `Xrm.Navigation.openWebResource`):

```Javascript
await Xrm.Navigation.openWebResource(
    'ava_/home/index.html',
    null,
    'ava_config.js');
```

Example (using `Xrm.Navigation.navigateTo`):

```Javascript
await Xrm.Navigation.navigateTo({
    pageType: 'webresource',
    webresourceName: 'ava_/home/index.html',
    data: 'ava_config.js'
});
```

In case you want to create multiple home pages, with this approach **you can have one single `index.html` and several `config` files** that will be passed to the index by need.

### Static way

As of now, it's not possible to set the `data=` querystring argument for a webresource that is opened from the sitemap. The available workaround is to _hardcode_ the config file name in the `index.html` page.

Just compile the webresource, then open the `index.html` page that has been generated by the build process, locate the following line:

```Javascript
window.__homepageconfigwebresourceurl__ = "";
```

And put the unique name of the webresource containing the config file between the double quotes. Example:

```Javascript
window.__homepageconfigwebresourceurl__ = "ava_config.js";
```

In case you want to create multiple home pages, with this approach **you must also duplicate the index.html pages**.