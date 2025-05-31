import React, { useState, useRef } from 'react';
import { Download, Plus, Trash2, Leaf, Settings, X, ChevronDown, ChevronUp } from 'lucide-react';

const SpiceLabelGenerator = () => {
  const [spiceName, setSpiceName] = useState('');
  const [languages, setLanguages] = useState([
    { lang: 'English', text: '', percentage: 30 },
    { lang: 'Punjabi', text: '', percentage: 30 },
    { lang: 'Hindi', text: '', percentage: 30 }
  ]);
  const [labelType, setLabelType] = useState('seamless');
  const [showSettings, setShowSettings] = useState(false);
  const canvasRef = useRef(null);
  const previewRef = useRef(null);

  const languageOptions = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Hindi',
    'Punjabi',
    'Chinese',
    'Japanese',
    'Arabic',
    'Russian'
  ];

  const spiceTranslations = {
    'cilantro': {
      'English': 'Cilantro',
      'Hindi': 'धनिया',
      'Punjabi': 'ਧਨੀਆ',
      'Spanish': 'Cilantro'
    },
    'red chillies': {
      'English': 'Red Chillies',
      'Hindi': 'लाल मिर्च',
      'Punjabi': 'ਲਾਲ ਮਿਰਚ',
      'Spanish': 'Chiles Rojos'
    },
    'turmeric': {
      'English': 'Turmeric',
      'Hindi': 'हल्दी',
      'Punjabi': 'ਹਲਦੀ',
      'Spanish': 'Cúrcuma'
    },
    'cumin': {
      'English': 'Cumin',
      'Hindi': 'जीरा',
      'Punjabi': 'ਜੀਰਾ',
      'Spanish': 'Comino'
    },
    'cardamom': {
      'English': 'Cardamom',
      'Hindi': 'इलायची',
      'Punjabi': 'ਇਲਾਇਚੀ',
      'Spanish': 'Cardamomo'
    },
    'garam masala': {
      'English': 'Garam Masala',
      'Hindi': 'गरम मसाला',
      'Punjabi': 'ਗਰਮ ਮਸਾਲਾ',
      'Spanish': 'Garam Masala'
    },
    'black pepper': {
      'English': 'Black Pepper',
      'Hindi': 'काली मिर्च',
      'Punjabi': 'ਕਾਲੀ ਮਿਰਚ',
      'Spanish': 'Pimienta Negra'
    },
    'cinnamon': {
      'English': 'Cinnamon',
      'Hindi': 'दालचीनी',
      'Punjabi': 'ਦਾਲਚੀਨੀ',
      'Spanish': 'Canela'
    }
  };

  const addLanguage = () => {
    setLanguages([...languages, { lang: '', text: '', percentage: 100 }]);
  };

  const removeLanguage = (index) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  const updateLanguage = (index, field, value) => {
    const updated = [...languages];
    updated[index][field] = value;
    setLanguages(updated);
  };

  const autoTranslate = () => {
    const spiceLower = spiceName.toLowerCase().trim();
    const translations = spiceTranslations[spiceLower];
    
    if (translations) {
      const updated = languages.map(lang => ({
        ...lang,
        text: translations[lang.lang] || lang.text
      }));
      setLanguages(updated);
    }
  };

  const generateLabel = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size based on label type
    const width = labelType === 'seamless' ? 800 : 600;
    const height = labelType === 'seamless' ? 200 : 400;
    
    canvas.width = width;
    canvas.height = height;

    // Clear canvas with clean white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    if (labelType === 'seamless') {
      generateSeamlessPattern(ctx, width, height);
    } else {
      generateStickerSheet(ctx, width, height);
    }

    // Update preview
    const preview = previewRef.current;
    preview.src = canvas.toDataURL();
  };

  const generateSeamlessPattern = (ctx, width, height) => {
    // Modern minimalist seamless pattern
    const totalTexts = languages.filter(l => l.text.trim()).length;
    if (totalTexts === 0) return;

    // Calculate spacing for seamless repeat
    const segmentWidth = width / 3;
    const centerY = height / 2;

    // Draw repeated pattern
    for (let x = -segmentWidth; x < width + segmentWidth; x += segmentWidth) {
      drawLanguageGroup(ctx, x, centerY, segmentWidth * 0.8);
    }

    // Add subtle decorative elements
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 4]);
    
    // Top and bottom borders
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(width, 20);
    ctx.moveTo(0, height - 20);
    ctx.lineTo(width, height - 20);
    ctx.stroke();
    ctx.setLineDash([]);
  };

  const generateStickerSheet = (ctx, width, height) => {
    // 2x3 grid of stickers
    const cols = 2;
    const rows = 3;
    const stickerWidth = width / cols - 20;
    const stickerHeight = height / rows - 20;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * (width / cols) + 10;
        const y = row * (height / rows) + 10;
        
        drawStickerLabel(ctx, x, y, stickerWidth, stickerHeight);
      }
    }
  };

  const drawLanguageGroup = (ctx, centerX, centerY, maxWidth) => {
    const activeLanguages = languages.filter(l => l.text.trim());
    if (activeLanguages.length === 0) return;

    let currentY = centerY - (activeLanguages.length * 15);

    activeLanguages.forEach((lang, index) => {
      const fontSize = Math.max(12, Math.min(32, (lang.percentage / 100) * 24));
      ctx.font = `${fontSize}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
      ctx.fillStyle = '#1f2937';
      ctx.textAlign = 'center';
      
      const text = lang.text || spiceName;
      ctx.fillText(text, centerX, currentY);
      currentY += fontSize + 8;
    });

    // Add small decorative leaf icon
    drawLeafIcon(ctx, centerX - maxWidth/2 + 15, centerY - 20);
  };

  const drawStickerLabel = (ctx, x, y, width, height) => {
    // Rounded rectangle background
    ctx.fillStyle = '#f9fafb';
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    const radius = 8;
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
    ctx.fill();
    ctx.stroke();

    // Draw languages inside sticker
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    drawLanguageGroup(ctx, centerX, centerY, width * 0.8);
  };

  const drawLeafIcon = (ctx, x, y) => {
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.ellipse(x, y, 4, 8, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
  };

  const downloadImage = (format) => {
    generateLabel();
    
    setTimeout(() => {
      const canvas = canvasRef.current;
      const link = document.createElement('a');
      
      if (format === 'pdf') {
        // For PDF, we'll create a simple data URL
        // In a real app, you'd use a library like jsPDF
        const dataUrl = canvas.toDataURL('image/png');
        link.href = dataUrl;
        link.download = `${spiceName || 'spice-label'}.png`;
      } else {
        link.href = canvas.toDataURL('image/png');
        link.download = `${spiceName || 'spice-label'}.png`;
      }
      
      link.click();
    }, 100);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="flex items-center gap-3 mb-8">
        <Leaf className="text-emerald-500" size={32} />
        <h1 className="text-3xl font-light text-gray-800">Spice Label Generator</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Spice Name
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={spiceName}
                onChange={(e) => setSpiceName(e.target.value)}
                placeholder="e.g., Turmeric, Cilantro, Red Chillies"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <button
                onClick={autoTranslate}
                disabled={!spiceName.trim()}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm"
              >
                Auto-translate
              </button>
            </div>
            {spiceName.toLowerCase().trim() && spiceTranslations[spiceName.toLowerCase().trim()] && (
              <p className="text-xs text-blue-600 mt-1">✨ Auto-translation available for this spice!</p>
            )}
          </div>

          {/* Expandable Settings Panel */}
          <div className="border border-gray-200 rounded-lg">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Settings size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Design & Languages</span>
                <span className="text-xs text-gray-500">
                  ({labelType === 'seamless' ? 'Seamless' : 'Stickers'} in {languages.filter(l => l.text.trim()).length > 0 ? languages.filter(l => l.text.trim()).map(l => l.lang || 'Unnamed').join(', ') : 'no languages'})
                </span>
              </div>
              {showSettings ? <ChevronUp size={18} className="text-gray-500" /> : <ChevronDown size={18} className="text-gray-500" />}
            </button>
            
            {showSettings && (
              <div className="border-t border-gray-200 p-4 space-y-6 bg-gray-50">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Label Type
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="seamless"
                        checked={labelType === 'seamless'}
                        onChange={(e) => setLabelType(e.target.value)}
                        className="text-emerald-500"
                      />
                      <span className="ml-2 text-sm">Seamless Wrap</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="stickers"
                        checked={labelType === 'stickers'}
                        onChange={(e) => setLabelType(e.target.value)}
                        className="text-emerald-500"
                      />
                      <span className="ml-2 text-sm">Sticker Sheet</span>
                    </label>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Languages & Text
                    </label>
                    <button
                      onClick={addLanguage}
                      className="flex items-center gap-1 px-3 py-1 text-sm text-emerald-600 hover:bg-emerald-100 rounded-md transition-colors"
                    >
                      <Plus size={16} />
                      Add Language
                    </button>
                  </div>

                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex gap-3 items-center">
                        <select
                          value={lang.lang}
                          onChange={(e) => updateLanguage(index, 'lang', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                        >
                          <option value="">Select Language</option>
                          {languageOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        <input
                          type="text"
                          placeholder="Text"
                          value={lang.text}
                          onChange={(e) => updateLanguage(index, 'text', e.target.value)}
                          className="flex-2 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                        />
                        <input
                          type="number"
                          placeholder="Size %"
                          value={lang.percentage}
                          onChange={(e) => updateLanguage(index, 'percentage', parseInt(e.target.value) || 100)}
                          min="50"
                          max="200"
                          className="w-20 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                        />
                        {languages.length > 1 && (
                          <button
                            onClick={() => removeLanguage(index)}
                            className="p-1 text-red-500 hover:bg-red-100 rounded transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={generateLabel}
              className="flex-1 bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Generate Preview
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => downloadImage('png')}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Download size={16} />
              Download PNG
            </button>
            <button
              onClick={() => downloadImage('pdf')}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Download size={16} />
              Download PDF
            </button>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Preview</h3>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
            <img
              ref={previewRef}
              alt="Label Preview"
              className="max-w-full h-auto mx-auto rounded-lg shadow-sm"
              style={{ display: 'block' }}
            />
            <p className="text-sm text-gray-500 text-center mt-2">
              Click "Generate Preview" to see your label
            </p>
          </div>
        </div>
      </div>

      {/* Hidden Canvas */}
      <canvas
        ref={canvasRef}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default SpiceLabelGenerator;