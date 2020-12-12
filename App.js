/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React, { Component } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Button,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.gestureHandlers = {
// 			onStartShouldSetResponder: () => true,
// 			onMoveShouldSetResponder: () => true,
// 			onResponderStart:() => {
// 				console.log('onResponderStart')
// 			},
// 			onResponderGrant: () => {
// 				console.log('onResponderGrant');
// 				this.setState({backgroundColor: 'green'})
// 			},
// 			onResponderMove: () => {
// 				console.log('onResponderMove')
// 			},
// 			onResponderEnd:() => {
// 				console.log('onResponderEnd')
// 			},
// 			onResponderRelease: () => {
// 				console.log('onResponderRelease')
// 				this.setState({backgroundColor: 'blue'})
// 			},
// 			onResponderTerminationRequest: () => {
// 				console.log('onResponderTerminationRequest');
// 				return true;
// 			},
// 			onResponderTerminate: (evt) => {
// 				console.log('onResponderTerminate')
// 			}
// 		};
//   }

//   render() {
//     return (
//       <>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <ScrollView
//             contentInsetAdjustmentBehavior="automatic"
//             style={styles.scrollView}>
//             <Header />
//             {global.HermesInternal == null ? null : (
//               <View style={styles.engine}>
//                 <Text style={styles.footer}>Engine: Hermes</Text>
//               </View>
//             )}
//             <View style={styles.body}>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>Step One</Text>
//                 <Text style={styles.sectionDescription}>
//                   Edit <Text style={styles.highlight}>App.js</Text> to change this
//                   screen and then come back to see your edits.
//                 </Text>
//               </View>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>See Your Changes</Text>
//                 <Text style={styles.sectionDescription}>
//                   <ReloadInstructions />
//                 </Text>
//               </View>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>Debug</Text>
//                 <Text style={styles.sectionDescription}>
//                   <DebugInstructions />
//                 </Text>
//               </View>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>Learn More</Text>
//                 <Text style={styles.sectionDescription}>
//                   Read the docs to discover what to do next:
//                 </Text>
//               </View>
//               <View style={styles.sectionContainer} >
//                  <Button title="Button" {...this.gestureHandlers}/>
//               </View>
//             </View>
//           </ScrollView>
//         </SafeAreaView>
//       </>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;


import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Button,
	Text,
  ScrollView
} from 'react-native';


export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text1: 'A 父组件',
			text2:'B 子组件'
		};
		this.gestureHandlers = {
      onStartShouldSetResponderCapture: () => true,
      onMoveShouldSetResponderCapture: () => true,
	  onStartShouldSetResponder: () => true,
      onMoveShouldSetResponder: () => true,
      onResponderGrant: () => {
				console.log('onResponderGrant--->A组件');
				this.setState({text1: 'A 父组件 被点击'})
      },
      onResponderReject: () => {
				console.log('onResponderReject--->A组件');
      },
			onResponderStart: () => {
				console.log('onResponderStart--->A组件')
      },
      onResponderTerminationRequest: () => {
        console.log('onResponderTerminationRequest--->A组件')
        return true
      },
      onResponderTerminate: () => {
        console.log('onResponderTerminate--->A组件')
      },
			onResponderMove: () => {
				console.log('onResponderMove--->A组件')
			},
			onResponderRelease: () => {
				console.log('onResponderRelease--->A组件')
				this.setState({text1:'A 父组件'})
			},
		};
		this.gestureHandlers2 = {
      onStartShouldSetResponderCapture: () => true,
      onMoveShouldSetResponderCapture: () => true,
			onStartShouldSetResponder: () => true,
      onMoveShouldSetResponder: () => true,
      onResponderGrant: () => {
				console.log('onResponderGrant---->B组件');
				this.setState({text2: 'B 子组件 被点击'})
      },
      onResponderReject: () => {
        console.log('onResponderReject---->B组件');
      },
			onResponderStart: () => {
				console.log('onResponderStart---->B组件')
      },
			onResponderMove: () => {
				console.log('onResponderMove---->B组件')
      },
      onResponderTerminationRequest: () => {
        console.log('onResponderTerminationRequest--->B组件')
        return false
      },
      onResponderTerminate: () => {
        console.log('onResponderTerminate--->B组件')
	  },
	  onResponderRelease: () => {
		console.log('onResponderRelease---->B组件')
		this.setState({text2: 'B 子组件'})
	  },
	};
}


	render() {
		//debugger
		return (
		 <View style={styles.container}>
				<View
					{...this.gestureHandlers}
					style={styles.gesview}>
					<Text style={styles.text}>{this.state.text1}</Text>

					{ <View
            {...this.gestureHandlers2}
						style={styles.sonview}>
						<Text style={styles.text}>{this.state.text2}</Text>
						{/* <Button  onPress={() => { 
							alert("onpress button")
						}} title="button" /> */}
					</View> }
				</View>

				<Button title="this is button" onPress={() => { 

                  }}></Button>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgb(236,236,236)'
	},
	gesview: {
		width: 200,
		height: 200,
		backgroundColor:'#B34D76',
	},
	text: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold'
	},
	sonview: {
		width:100,
		height:100,
		backgroundColor:'#33AECC',
		alignSelf:'center',
		marginTop:20,
	}

});