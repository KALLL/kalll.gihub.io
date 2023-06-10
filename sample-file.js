import icon from '../images/placeholder-image.png';
this.state = {
  realFile: null
}
handleFileSelect = (event) => {
  // Get the selected file from the event
  const file = event.target.files[0];
  // Set the realFile state to the selected file
  this.setState({realFile: file});
  // Set the image source to the file URL
  this.setState({imageSource: {uri: URL.createObjectURL(file)}});
}
handleImageError = () => {
  // Set the image source to icon.png
  this.setState({imageSource: icon});
}
handleFileUpload = () => {
  // Get the real file from the state
  const file = this.state.realFile;
  // Check if the file is not null
  if (file) {
    // Upload the file using your preferred method
  }
}
  <input type="file" onChange={this.handleFileSelect} />
    <Image
  source={this.state.imageSource}
  style={this.state.isLoading ? undefined : [styles.w100, styles.h100]}
  // Call the handleImageError function when the image fails to load
  onError={this.handleImageError}
/>
