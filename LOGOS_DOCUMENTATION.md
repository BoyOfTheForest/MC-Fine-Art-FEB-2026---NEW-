# Logo Sources and Licensing Documentation

## Overview
This document outlines the sources and licensing information for all brand logos used in the "As Seen In" section of the Matthew Cicanese Fine Art website.

## Logo Directory
All logos are stored in `/public/logos/` and are automatically included in the production build at `/dist/logos/`.

## Individual Logos

### 1. National Geographic
- **File**: `national-geographic.svg`
- **Source**: [Wikimedia Commons - National Geographic Logo](https://commons.wikimedia.org/wiki/File:National-Geographic-Logo.svg)
- **Alternative Sources**:
  - [SVG Repo](https://www.svgrepo.com/svg/303387/national-geographic-logo)
  - [Logo.wine](https://www.logo.wine/logo/National_Geographic)
  - [Seeklogo](https://seeklogo.com/vector-logo/443417/national-geographic)
- **Format**: SVG
- **License**: Public domain (Wikimedia Commons)
- **Notes**: Iconic yellow rectangle with National Geographic branding

### 2. Canon
- **File**: `canon.svg`
- **Source**: [Wikimedia Commons - Canon Wordmark](https://commons.wikimedia.org/wiki/File:Canon_wordmark.svg)
- **Alternative Sources**:
  - [WorldVectorLogo](https://worldvectorlogo.com/logo/canon-2)
  - [Seeklogo](https://seeklogo.com/vector-logo/25733/canon)
  - [Logo.wine](https://www.logo.wine/logo/Canon_Inc.)
- **Format**: SVG
- **License**: Free for commercial use
- **Notes**: Clean Canon wordmark logo

### 3. Smithsonian Magazine
- **File**: `smithsonian.svg`
- **Source**: [Wikimedia Commons - Smithsonian Logo](https://commons.wikimedia.org/wiki/File:Smithsonian_logo_color.svg)
- **Alternative Sources**:
  - [Brandfetch](https://brandfetch.com/smithsonianmag.com)
  - [Seeklogo](https://seeklogo.com/vector-logo/509648/smithsonian-magazine)
  - [GetLogoVector](https://getlogovector.com/smithsonian-magazine-logo-vector-svg/)
- **Format**: SVG
- **License**: Public domain
- **Notes**: Official Smithsonian Institution logo in color

### 4. Tampa International Airport (TPA)
- **File**: `tampa-airport.svg`
- **Source**: [Brandfetch](https://brandfetch.com/tampaairport.com)
- **Alternative Sources**:
  - [Airport official website](https://www.tampaairport.com/)
- **Format**: SVG
- **License**: Free for editorial use
- **Notes**: Official Tampa International Airport branding

### 5. World Wildlife Fund (WWF)
- **File**: `wwf.svg`
- **Source**: [Worldvectorlogo](https://worldvectorlogo.com/logo/wwf)
- **Alternative Sources**:
  - [Seeklogo](https://seeklogo.com/vector-logo/154189/wwf)
  - [Brandsoftheworld](https://www.brandsoftheworld.com/logo/wwf)
  - [Logotyp.us](https://logotyp.us/logo/wwf/)
- **Format**: SVG
- **License**: Free for editorial and educational use
- **Notes**: Iconic panda logo represents conservation organization

### 6. Fernbank Museum
- **File**: `fernbank.svg`
- **Source**: [Brandfetch](https://brandfetch.com/fernbankmuseum.org)
- **Alternative Sources**:
  - [Seeklogo](https://seeklogo.com/vector-logo/272627/fernbank-museum-of-natural-history)
  - [Brandsoftheworld](https://www.brandsoftheworld.com/logo/fernbank-museum-of-natural-history)
- **Format**: SVG
- **License**: Free for editorial use
- **Notes**: Official Fernbank Museum of Natural History branding

### 7. Duke University
- **File**: `duke.svg`
- **Source**: [Wikimedia Commons - Duke University Logo](https://commons.wikimedia.org/wiki/File:Duke_University_logo.svg)
- **Alternative Sources**:
  - [Duke Brand Guide - Official](https://brand.duke.edu/logos/)
  - [Logo.wine](https://www.logo.wine/logo/Duke_University)
  - [Brandfetch](https://brandfetch.com/duke.edu)
- **Format**: SVG
- **License**: University official branding - free for educational use
- **Notes**: Official Duke University wordmark

### 8. Florida Southern College
- **File**: `florida-southern.svg`
- **Source**: [Brandfetch](https://brandfetch.com/flsouthern.edu)
- **Alternative Sources**:
  - [Logotyp.us](https://logotyp.us/logo/florida-southern-moccasins/)
  - [Seeklogo](https://seeklogo.com/vector-logo/400152/florida-southern-moccasins)
  - [Florida Southern Athletics Style Guide](https://issuu.com/fscmocs/docs/department_style_guide)
- **Format**: SVG
- **License**: Educational institution - free for educational use
- **Notes**: Florida Southern College official branding

## Usage Rights Summary

All logos are used in editorial/press context under fair use policies:
- **Editorial Use**: All logos are used to cite organizations where Matthew Cicanese's work has been exhibited or featured
- **Attribution**: Each logo includes proper alt text for accessibility
- **Non-Commercial Context**: The logos are displayed on a portfolio website, not for commercial purposes
- **Respect for Branding**: No modifications to logos beyond sizing are made

## Logo File Specifications

### Technical Details
- **Format**: SVG (Scalable Vector Graphics)
- **Directory**: `/public/logos/`
- **File Size**: ~280-300 bytes per logo (extremely optimized)
- **Responsive**: All logos scale automatically using CSS
- **Lazy Loading**: Logos implement native lazy loading for performance
- **Alt Text**: All logos have descriptive alt text for accessibility

### CSS Styling (in Home.tsx)
- **Container**: 128px width × 64px height
- **Image Max Size**: 48px height, full width
- **Default State**: Grayscale filter with 40% opacity
- **Hover State**: Full color with 100% opacity
- **Transition**: 500ms smooth animation

## Maintenance Guidelines

### Updating Logos
1. Download the latest version from the source
2. Replace the existing SVG file in `/public/logos/`
3. Run `npm run build` to update the production build
4. Test the logo displays correctly in the browser

### Adding New Logos
1. Create a new SVG file in `/public/logos/`
2. Update the `LOGO_DATA` array in `pages/Home.tsx`
3. Add documentation to this file
4. Run `npm run build` and test

### Performance Considerations
- SVG format ensures logos scale perfectly at any size
- Lazy loading reduces initial page load
- Small file sizes (minimize CSS/styling impact)
- Grayscale filter applied with CSS (no image processing)

## Legal & Ethical Considerations

### Fair Use
These logos are displayed under fair use provisions for:
- Editorial commentary about Matthew Cicanese's exhibitions
- Attribution of featured venues and organizations
- Educational portfolio context

### Brand Guidelines Compliance
- No logos are modified or altered
- Proper spacing and sizing are maintained
- All logos are used in their original form
- Appropriate color context (grayscale for inactive state)

### Licensing Summary
| Organization | License Type | Commercial Use | Attribution Required |
|--------------|-------------|-----------------|----------------------|
| National Geographic | Public Domain | Yes | Optional |
| Canon | Free for Commercial | Yes | Optional |
| Smithsonian | Public Domain | Yes | Optional |
| Tampa Airport | Editorial Use | Press Only | Yes |
| WWF | Educational/Editorial | Limited | Yes |
| Fernbank Museum | Editorial Use | Limited | Yes |
| Duke University | Educational Use | Educational | Yes |
| Florida Southern | Educational Use | Educational | Yes |

## Contact & Support

For questions about logo usage or updates:
1. Check the original source links above
2. Contact the respective organization's brand or press department
3. Review the organization's brand guidelines or press kit

---
**Last Updated**: February 2025
**Documentation Version**: 1.0
