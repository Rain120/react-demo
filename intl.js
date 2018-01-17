// https://www.npmjs.com/package/react-intl-universal
import intl from 'react-intl-universal';
 
// locale data
const locales = {
  "en-US": require('./locales/en-US.js'),
  "zh-CN": require('./locales/zh-CN.js'),
};
 
class App extends Component {
 
  state = {initDone: false}
 
  componentDidMount() {
    this.loadLocales();
  }
 
  loadLocales() {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    intl.init({
      currentLocale: 'en-US', // TODO: determine locale here
      locales,
    })
    .then(() => {
      // After loading CLDR locale data, start to render
      this.setState({initDone: true});
    });
  }
 
  render() {
    return (
      this.state.initDone &&
      <div>
        {intl.get('SIMPLE')}
      </div>
    );
  }
 
}
