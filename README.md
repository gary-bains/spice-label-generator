# 🌶️ Spice Label Generator

A modern, multilingual spice label generator that creates beautiful, printable labels for your spice jars and containers. Perfect for home cooks, restaurants, and spice enthusiasts who want professional-looking labels in multiple languages.

## ✨ Features

- **🌍 Multilingual Support**: Create labels in English, Hindi, Punjabi, Spanish, and more
- **🤖 Auto-Translation**: Built-in translations for popular spices (Turmeric, Cilantro, Cumin, etc.)
- **🎨 Modern Design**: Clean, minimalist aesthetic with consistent styling
- **📐 Multiple Formats**: 
  - Seamless wrap labels for any jar size
  - Sticker sheets for easy cutting and application
- **📱 Responsive Design**: Works on desktop, tablet, and mobile
- **💾 Instant Download**: Generate PNG files ready for printing
- **⚡ No Backend Required**: Runs entirely in your browser

## 🚀 Live Demo

[**Try it live on GitHub Pages →**](https://yourusername.github.io/spice-label-generator)

## 📸 Screenshots

![Spice Label Generator Interface](screenshot-main.png)
*Clean, intuitive interface with expandable settings*

![Generated Labels](screenshot-labels.png)
*Example of seamless wrap and sticker sheet formats*

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Quick Start
```bash
# Clone the repository
git clone https://github.com/yourusername/spice-label-generator.git
cd spice-label-generator

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 🎯 How to Use

1. **Enter Spice Name**: Type the name of your spice (e.g., "Turmeric")
2. **Auto-Translate** (Optional): Click the auto-translate button for supported spices
3. **Configure Settings**: Expand the "Design & Languages" panel to:
   - Choose label type (Seamless wrap or Sticker sheet)
   - Add/remove languages
   - Adjust text sizes with percentage scaling
4. **Generate Preview**: Click "Generate Preview" to see your label
5. **Download**: Save as PNG for printing

## 🌍 Supported Languages

- **English** - Default
- **Hindi** - हिंदी (with Devanagari script)
- **Punjabi** - ਪੰਜਾਬੀ (with Gurmukhi script)
- **Spanish** - Español
- **French** - Français
- **German** - Deutsch
- **Italian** - Italiano
- **Portuguese** - Português
- **Chinese** - 中文
- **Japanese** - 日本語
- **Arabic** - العربية
- **Russian** - Русский

## 🌶️ Pre-loaded Spice Translations

The app includes automatic translations for common spices:

| English | Hindi | Punjabi | Spanish |
|---------|-------|---------|---------|
| Turmeric | हल्दी | ਹਲਦੀ | Cúrcuma |
| Cilantro | धनिया | ਧਨੀਆ | Cilantro |
| Red Chillies | लाल मिर्च | ਲਾਲ ਮਿਰਚ | Chiles Rojos |
| Cumin | जीरा | ਜੀਰਾ | Comino |
| Cardamom | इलायची | ਇਲਾਇਚੀ | Cardamomo |
| Garam Masala | गरम मसाला | ਗਰਮ ਮਸਾਲਾ | Garam Masala |
| Black Pepper | काली मिर्च | ਕਾਲੀ ਮਿਰਚ | Pimienta Negra |
| Cinnamon | दालचीनी | ਦਾਲਚੀਨੀ | Canela |

## 🔧 Technical Details

### Built With
- **React** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Lucide React** - Modern icon library
- **HTML5 Canvas** - Label generation and rendering

### Key Components
- **SpiceLabelGenerator** - Main component with state management
- **Canvas Rendering** - Dynamic label generation with proper text scaling
- **Responsive Design** - Mobile-first approach with Tailwind

### Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🎨 Customization

### Adding New Spices
Edit the `spiceTranslations` object in `App.js`:

```javascript
const spiceTranslations = {
  'your-spice-name': {
    'English': 'Your Spice Name',
    'Hindi': 'हिंदी अनुवाद',
    'Punjabi': 'ਪੰਜਾਬੀ ਅਨੁਵਾਦ',
    'Spanish': 'Traducción en Español'
  }
};
```

### Adding New Languages
1. Add to `languageOptions` array
2. Include translations in `spiceTranslations` object
3. Test with appropriate fonts for the script

### Styling Modifications
The app uses Tailwind CSS. Key classes can be modified in the component for:
- Color schemes
- Typography
- Layout spacing
- Responsive breakpoints

## 📱 Deployment

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/spice-label-generator"

# Deploy
npm run deploy
```

### Other Platforms
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repo
- **Surge**: `npm run build && surge build/`

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Contribution Ideas
- [ ] Add more spice translations
- [ ] Implement real translation API integration
- [ ] Add PDF generation support
- [ ] Create additional design themes
- [ ] Add spice illustrations/icons
- [ ] Implement batch label generation
- [ ] Add label size customization
- [ ] Create label templates for different jar shapes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the beautiful utility-first CSS framework
- **Lucide** for the clean, modern icons
- **React** team for the amazing framework
- **Spice community** for inspiration and feedback

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/spice-label-generator/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/spice-label-generator/discussions)
- **Email**: your.email@example.com

## 🗺️ Roadmap

- [ ] **v2.0**: Real-time translation API integration
- [ ] **v2.1**: PDF generation with proper vector output
- [ ] **v2.2**: Batch processing for multiple spices
- [ ] **v2.3**: Custom design themes and templates
- [ ] **v2.4**: Spice image backgrounds and icons
- [ ] **v2.5**: Label sizing for different container types

---

**Made with ❤️ for the global cooking community**

*Star ⭐ this repo if you found it helpful!*