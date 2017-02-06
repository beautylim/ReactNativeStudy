/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TabBarIOS,
  NavigatorIOS,
    Navigator
} from 'react-native';

import HomePageComponent from './ios_views/HomePageComponent';
import HistoryComponent from './ios_views/HistoryComponent';
import MySelfComponent from './ios_views/MySelfComponent';

var img1_base64 = 'data:image/png;base64,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JXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA3LTI1VDIxOjUwOjE1KzA4OjAwwyLYKQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wNi0wOVQxNzozMTo1NCswODowMPhlmTcAAABOdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuOC44LTEwIFExNiB4ODZfNjQgMjAxNS0wNy0xOSBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZwUMnDUAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADUxMo+NU4EAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTEyHHwD3AAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNDAyMzA2MzE0BKkgvwAAABN0RVh0VGh1bWI6OlNpemUANy42NktCQr2aH/cAAABadEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL3d3d3Jvb3Qvd3d3LmVhc3lpY29uLm5ldC9jZG4taW1nLmVhc3lpY29uLmNuL3NyYy8xMTY5My8xMTY5MzI2LnBuZ+9YE8gAAAAASUVORK5CYII=';
var img2_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABfCAQAAAAtrnMEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAcIAAAHCAJ87TcIAAAu1SURBVHjazdtplFXVlQfwX72aBQsoBKGYCmQUIY4hYscWEW2DkYRoMFFXJ47RzhLt1lZbl63RdMfQsdu42piOGpWObdqgESdguVSihkTQdmAKgTAPUgjFUBM13P5Ql1vvVdWrulW+qvJ/vtx3zz73/N+5e5+zz97nZsksejnZVNOMVqDcBxZ517oM95FhZJnsf+xVL4hKjdWucnRPU0uPQnNtTiJcF9Gv9qITMz1CmUGx+3xXATjoTR9ZjVInONuxeN8N3unGQYyFfh6JxnaNr4f0IdtUCx0WWOe0nqaZijz/EZF+xeQW9X3crEzgLaN6mmoTst3gYEj6HWNblUn4lp0CT39+jPPLykLSf2rT8C5RpsYVPU23EQMsjqa6a9uUzHKTWhud3NOUyXJPpNVP6dWOdC8PCfxcdk/THmVtSPoTp8SQH2GV3U7vWdIJD0SLy6NyYrW5RKVnFfYk7dN9EpLe6Ysx2+R73P7PPt6Jz9D2fAPDq5e8F7NNjSfUmZ2x1bnDKI30utYlHWiX8JAtxvUU7X/QENL+SEmHWk60ye2frfN4htQSfV0UvehX7ehQ27Xedp4HVYa/E45SpEixPATh3YP22OdQ9Ds27Wx5SMiTK0u9WrUC1DtsTLSM77ewg3+53qMeNsE2I401xkiDDHC03nJkyZErgSr7bLfKu35vs8pU+q2ZRp5hJjnJeIMk5CqUL+GwatUaUGGLoc4P2y53rvLYlLP1N8YUN9lopQaHlClXpkqdQJZcfQ1QotQYoxTL0mC3dV71K1vT0c42wSkudKoSORrst9VBFXbYo0x1+I8TSlytX9hmhR/aq9wWBzSkpZvQzzC9jTBWg/VGm+ZbPknbIuFow51qhsnGydFglXlecKAl7XG+Z46BstXa4g1v+T/bVKsPlaMJM/zWUeH17V5SqkSBAzZba78a9UmyuQqMMkaR3db7RLVqgQmedrUVMd7OAH9jrkmy1XjR3FQ7KvB96wQC5ea7UGmbM/qPotXx02hRz1fiRONMcZ6TDZBAkRPNMMlEQ5pZUbbHXB1btYa6xT6Bei8b2XT7GPNUChy20Ex57Twkx7MR7T/q26K+wAhnmuk8FxufdiH/hrtj0ybHHJsEAo/Jb5xJst3qZlT6qX89oj1toMRJ0fUHKeaYr9g4JzjOBMPVy7XBDhuttNqO0KCPYJmz9LE/Ju06v3aMB+T5pue8DHOUC1S7rd1xbsQFqqPRvia8lzDWzRZZ41DS7r0p7LDZUj/xV/KjpyTcH8trbEJvCwUCi/RhuHfDwW/PXz6CH0Z0qkxHjjPNszElPtJ62ecZF+sTPudGf9sh2lyiVmCPqcxSKVCW9OLbRqElEY1yU4z0U5+2Szh55Bc5Ux5Od18HXarj7RKo9LWEsxRie/Jk3iZKktygvb5ise8r7kDXec7zvH/T3xp5rRh0WzikBvlKE6F+7Yhhio0YrH90PcgtxnTCCS12vV87wZZIYeKhQC4SCnIMQpMD0z6Olhtdd36Xkm264yyz3Ha1sVuN0Q/1ynPCFa1Eb3tjNo0337SPUsdab4A1NrbhFiTjXAWosTVhGxjk2JidjY0pFweF5uhriNnGxVC18WaCKnsT3gcDnRWjm4TJGY6djnWdrVY43UxD2pGd4ziw1p/4ukqBwHvt7lH6usxcf+7AZBevLFAk2ynuNqsNBRxtTSh/G0y0USDQ4B/boJztHDc6y/G2ZZz2YVeCElf5gVNb7b+3X4bSG01oJPSzKIb3hTSkB7vGPyvFlxzIOO3ASmNCJTzbz1wZ+fJNuExVKPvwESs4xc7w1pIohNCELCf5L98JY9bfVtcFtAMPRiY50L3mN4sUTg01IrDbGUduJvw8vNlgXjPtKnCd/zY1fGi+F7qEdODPSX50njkWmxv5SKMsi/jdnbwPmBJlXSrcmBRaHOzfPR3aL3zB9i6i3WBuynCd4XceNALDvBhJfWh4qipcpyas2uc7IfETvebBFH/jni4iHQgsa+bZlFjgXdM9HUnsd1FzDS7yfFS91/VyzLbCXSnR//6WdyHtCuc24zTQIz5VG0nc21p45PgkUp961Fp3NtPzaVGyo2vKDc0YTfJyUu0LBrc+zZ1vT5LYmy2W+2u7lHTg4ZTeTvLHpLoPkre+qch2WZLDX+s5o1Pq7+hi2kv1jua2i21IqXuprb1XtjsdThJ+3wVJ88rjXUx7g2Ggj9ujNFYgsN07KvwovW+e7VbVKQvKXneEa1a+RV1Mu8xkjPVMkhkGdrrIEEvUuyNdxPJSB/zevSmmV+N1X0Ivb3Ux7QrTXGR1yr1dvhlq+iaHXNca6el22GaGHH/XbFO7wZ1GeruLaR+2pFm/m3w1WvQvdcD2lumTEq9Ha1XCpZGf0ljqvBlGhbqvrE6ZyXM9LrDIgGTS+X4h8Hq0vU2Y5oNuppla3mqReD3NdoG7km+dq9we01PEJvlNinF0XzlsvhEtlDjLPQKrm7aFxZYIPNXCUvv6SYdCN5kpe9yR5kjB8bYL3H9E369Wp9rXWp0SvxoGkLtPo7+SNr1d6FWB9Y0BpjzPCbydNrY00ePR3qJrS42n2tli3yRQ5RuNOrxD4J/aED7Kd62MEnpdVTa4pd3w6TQVAv8CNwgcajfgMNxDXbKPPFI+ihXKGG+nwFKyPCawLWkPkw4FZjWbzTNX6l0fgzSTlAmsS+jtONTHiMRVW2R5rId3HBu8EktumKNRm5CnF7JiHU6p8USUu80sXrY5hlSW8+VjQ2OalOL0bngKXm3Mm2QYK/2nODHfCS5AvaUJFf6CXmbHyr9XWZZx0oc9YH0MuaHuVop9jRyuVC+wL4xntocLoj1+psoCRe32mmWk34by8xtDTUNDp+kjU2LQPjMMdWaqvN2uemYZ7jZrwnXjQ+OPVNweZrnWuaaVcFoqJtiRQdK1YdiyNeTo52SXu9+aaMe1rXGFbHRKiv3CbFDnXY/4g08cTGMkRV41NZY6xUG9j623yw7lDjigFrn66WOw0UYp1S8pfLbBDY0T5ZG9w3C/dHZ4XavMFh9aaaPdDqgVSMjXR5ESQ10exkczjQb1GpCQ3UrGv87zfmBV42A2pR5K3eHypCwtgVpVKtULwnMlefJ65HBWtXc86SX7Wqvs5Vqre2hjkK5U2myhi5vnL7Oa/RpipitMTjqBnfmR26CXYoVJicLmaFBlj/VWWGqNXaqbC7T2yvubarzTnaDEUe0qxSq/s85QFxvWrux+iy2wVIFBBjvGDDtsVaxIjix1DtinUuCALbband6RSN9RnoFGGWOEEsfoE0kGyvXx15HR/NitGk84zHK2UkOjcz1NqLXLJu95zvKkkctxn/lWdeaVxTOw3JSFv8ZES8LsMYvNUhM+K88xxptktBLFsgUO2ekvVlnZ4jwJwz3ie7Z0hnbnUBAttIGPW12gchTq5ag2Z57ZXmjlzcRC5864VnslGrmRrXyNQJ0qFSodbsOzO8PazrrBnT2au9Su8KqXGZ16QqGRnf+kpbO0tyWZ0jnt+jGt4UTH+qC7aVdYEKnJhE59b3ChjbZ3N21esjq8KkyTcG4LQ8yyPOWYYzfR3m5BdH1hahw0Bk410Ied7vsz4ctRfLDGtzvUMt8z3urggaOMIdcT0ey9OPZxPJiu3E09Qxq+GIV79nbgM4k8/2tzsyxctyLXU9F4P5biq7eFqco824b/1w04zdaQ9n7nx2rRx8I0Qeluxc1RJPb5WB7GFRr8prO+SOYwNEoyV7fImrfERB+pckFPk4aZUc52azsLT1/PC7zw+fhqMuGeSFEWpTuHgHz3afh8fHrYiP6eDIk3+FWaZEq+u1Sqd0tPk03GMG+E413nyVbCYwPNU6HB/A6eIe5yHOf1aA5fblbSLJ7jPG+oF/hDeIbhMyOTwZpx7jU7DO8f9Jo1Nsk2yETT9Mdr/t7H3TeO8dHPj9OcyjzkmYwe6s0wEqZ4WXlKMrDax67KbMCoKyJ6RU5xpnOMkKXcCksssymzXfw/RTt9MMAqua8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDctMjVUMjE6NDk6NDIrMDg6MDBz/hzJAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTA0LTI0VDIxOjM2OjA1KzA4OjAwgWip9wAAAE50RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNi44LjgtMTAgUTE2IHg4Nl82NCAyMDE1LTA3LTE5IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3JnBQycNQAAAGN0RVh0c3ZnOmNvbW1lbnQAIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgcgt1lgAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANTQwHPTG6AAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1MTIcfAPcAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADEzOTgzNDY1NjUSvHUwAAAAE3RFWHRUaHVtYjo6U2l6ZQAxNy41S0JCuLYKMwAAAFp0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2hvbWUvd3d3cm9vdC93d3cuZWFzeWljb24ubmV0L2Nkbi1pbWcuZWFzeWljb24uY24vc3JjLzExNDk1LzExNDk1NTUucG5n8LgqUAAAAABJRU5ErkJggg==';
var img3_base64 = 'data:image/png;base64,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s1VQOsia4dXNWCqkicJb3hx+tCGN30tph0qfE87jiGTZUR60KKWoBRuzeV/a9OCSI+fH/VagLvEiOVGyMdlGOqv89gx4+NWwupG5byJ/YIVUbZAaamikgXrOjGKB2wzhWUwnj3y+ROHI/NeLD1jKedEAuJVNqusdQ3TxOYPXfZrvwUYWWapZ6bOU8WHgz9N5S+ditJWln33co9WcifwgoK9FV3HxnLCCqoqZbJH2K0dPGaKKe/WMjk7KOUJHyCXo61cG6Kae1WqRmnpfsjGOHKaQTz75zAx339SocY066mmggWbOcYEBvQaI11OZTqZFqcYeaumwZAi/iZu4YaB7+RgAG4nEq40FFvHRt3d6BGMo42HiqaKCsxHhP8FDBviG8UPFta3Xtfn1Rwr/FV38HxvkG0Qi/1I840VpR6kW37fvbmTPj5l8L/RPWWKEpFeCjl0LIj8xAnzDBvRyUDnexyc6+AcM8n33/7cO/igwmQ2008N7zNXNd9HDTp38KVQY4gPGRiFI4HYSqJbXyE3nf8IXhlTd2DDmyLRgJ40U3LrjRqP8CCOZFXzM//iTzv/RYZQfcfj+aHODLge0QklQrTdlT3aYEB2cHgeUJDis4X3RYSH83Fs4Dk4PP+IGyA6uOiS/R+Dv18G/DsjlAzx4qFX7g2VV/h4v34Q/sf0/pphYO5nHDUYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDctMjVUMjE6NTA6MjUrMDg6MDBNrd/KAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTA0LTI4VDIxOjUzOjMzKzA4OjAwxYlJ4QAAAE50RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNi44LjgtMTAgUTE2IHg4Nl82NCAyMDE1LTA3LTE5IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3JnBQycNQAAAGN0RVh0c3ZnOmNvbW1lbnQAIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC40LCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgDkmD4wAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANDAweVpp2wAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA0MDDqqzmGAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADEzOTg2OTMyMTMuUvV3AAAAE3RFWHRUaHVtYjo6U2l6ZQA4LjA4S0JCJE3tjQAAAFp0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2hvbWUvd3d3cm9vdC93d3cuZWFzeWljb24ubmV0L2Nkbi1pbWcuZWFzeWljb24uY24vc3JjLzExNTYwLzExNTYwNzMucG5nXBOLvgAAAABJRU5ErkJggg==';
class Greeting extends Component{
  render(){
    return(
      <Text style={styles.welcome}>Hello {this.props.name}!</Text>
    );
  }

}
export default class TestReactNative extends Component {
    constructor(props) {
        super(props);
        console.log(1);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']),
            selectedTab:'blueTab'

        };
    }

    render() {
        console.log(2);
        return (
            // <View>
            //   <ListView dataSource={this.state.dataSource}
            //             renderRow={(rowData) => <Greeting name={rowData}> </Greeting>}/>
            // </View>
            <TabBarIOS
         unselectedTintColor="yellow"
         tintColor="white"
         barTintColor="darkslateblue">
         <TabBarIOS.Item
           title="首页"
           icon={{uri: img1_base64, scale: 3}}
           selected={this.state.selectedTab === 'blueTab'}
           onPress={() => {
             this.setState({
               selectedTab: 'blueTab',
             });
           }}>
           {this._renderContent('homepage')}
         </TabBarIOS.Item>
         <TabBarIOS.Item
           title="历史记录"
           icon={{uri: img2_base64, scale: 3}}
           badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
           selected={this.state.selectedTab === 'redTab'}
           onPress={() => {
             this.setState({
               selectedTab: 'redTab',
             });
           }}>
           {this._renderContent('history')}
         </TabBarIOS.Item>
         <TabBarIOS.Item
           icon={{uri: img3_base64, scale: 3}}
           title="个人中心"
           selected={this.state.selectedTab === 'greenTab'}
           onPress={() => {
             this.setState({
               selectedTab: 'greenTab',
             });
           }}>
           {this._renderContent('personal')}
         </TabBarIOS.Item>
       </TabBarIOS>
        );
    }

    _renderContent(name){
      var textContent = '';
      var DefaultComponent = null;
      switch (name) {
        case 'homepage':
          textContent = '首页';
          DefaultComponent = HomePageComponent;
          break;
        case 'history':
          textContent = '历史记录';
            DefaultComponent = HistoryComponent;
          break;
        default:
        textContent = '个人中心';
            DefaultComponent = MySelfComponent;
        break;
       }
       return (
           // <DefaultComponent name = {textContent}/>
           // <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
           //     <Text>{textContent}</Text>
           // </View>
           <NavigatorIOS  initialRoute={{title:textContent,component:DefaultComponent,passProps:{name:textContent}}}
                          style={{flex:1}}
           />
       );
    }
}

AppRegistry.registerComponent('TestReactNative', () => TestReactNative);
