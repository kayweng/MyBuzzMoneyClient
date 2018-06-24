const currencyCodes = [
  // {'country': 'Afghanistan', 'currency_code': 'AFN'},
  // {'country': 'Albania', 'currency_code': 'ALL'},
  // {'country': 'Algeria', 'currency_code': 'DZD'},
  // {'country': 'American Samoa', 'currency_code': 'USD'},
  // {'country': 'Andorra', 'currency_code': 'EUR'},
  // {'country': 'Angola', 'currency_code': 'AOA'},
  // {'country': 'Argentina', 'currency_code': 'ARS'},
  // {'country': 'Armenia', 'currency_code': 'AMD'},
  // {'country': 'Aruba', 'currency_code': 'AWG'},
  {'country': 'Australia', 'currency_code': 'AUD'},
  {'country': 'Austria', 'currency_code': 'EUR'},
  // {'country': 'Azerbaijan', 'currency_code': 'AZN'},
  // {'country': 'Bahamas', 'currency_code': 'BSD'},
  // {'country': 'Bahrain', 'currency_code': 'BHD'},
  {'country': 'Bangladesh', 'currency_code': 'BDT'},
  // {'country': 'Barbados', 'currency_code': 'BBD'},
  // {'country': 'Belarus', 'currency_code': 'BYR'},
  {'country': 'Belgium', 'currency_code': 'EUR'},
  // {'country': 'Belize', 'currency_code': 'BZD'},
  // {'country': 'Benin', 'currency_code': 'XOF'},
  // {'country': 'Bermuda', 'currency_code': 'BMD'},
  // {'country': 'Bhutan', 'currency_code': 'BTN'},
  // {'country': 'Bolivia', 'currency_code': 'BOB'},
  // {'country': 'Bosnia-Herzegovina', 'currency_code': 'BAM'},
  // {'country': 'Botswana', 'currency_code': 'BWP'},
  // {'country': 'Bouvet Island', 'currency_code': 'NOK'},
  {'country': 'Brazil', 'currency_code': 'BRL'},
  // {'country': 'British Indian Ocean Territory', 'currency_code': 'USD'},
  {'country': 'Brunei Darussalam', 'currency_code': 'BND'},
  // {'country': 'Bulgaria', 'currency_code': 'BGN'},
  // {'country': 'Burkina Faso', 'currency_code': 'XOF'},
  // {'country': 'Burundi', 'currency_code': 'BIF'},
  // {'country': 'Cambodia', 'currency_code': 'KHR'},
  // {'country': 'Cameroon', 'currency_code': 'XAF'},
  {'country': 'Canada', 'currency_code': 'CAD'},
  // {'country': 'Cape Verde', 'currency_code': 'CVE'},
  // {'country': 'Cayman Islands', 'currency_code': 'KYD'},
  // {'country': 'Central African Republic', 'currency_code': 'XAF'},
  // {'country': 'Chile', 'currency_code': 'CLP'},
  {'country': 'China', 'currency_code': 'CNY'},
  // {'country': 'Christmas Island', 'currency_code': 'AUD'},
  // {'country': 'Cocos (Keeling) Islands', 'currency_code': 'AUD'},
  // {'country': 'Colombia', 'currency_code': 'COP'},
  // {'country': 'Comoros', 'currency_code': 'KMF'},
  // {'country': 'Congo', 'currency_code': 'XAF'},
  // {'country': 'Congo, Dem. Republic', 'currency_code': 'CDF'},
  // {'country': 'Cook Islands', 'currency_code': 'NZD'},
  // {'country': 'Costa Rica', 'currency_code': 'CRC'},
  // {'country': 'Croatia', 'currency_code': 'HRK'},
  // {'country': 'Cuba', 'currency_code': 'CUP'},
  // {'country': 'Cyprus', 'currency_code': 'EUR'},
  {'country': 'Czech Rep. ', 'currency_code': 'CZK'},
  {'country': 'Denmark', 'currency_code': 'DKK'},
  // {'country': 'Djibouti', 'currency_code': 'DJF'},
  // {'country': 'Dominican Republic', 'currency_code': 'DOP'},
  // {'country': 'Ecuador', 'currency_code': 'ECS'},
  {'country': 'Egypt', 'currency_code': 'EGP'},
  // {'country': 'El Salvador', 'currency_code': 'SVC'},
  // {'country': 'Equatorial Guinea', 'currency_code': 'XAF'},
  // {'country': 'Eritrea', 'currency_code': 'ERN'},
  // {'country': 'Estonia', 'currency_code': 'EUR'},
  // {'country': 'Ethiopia', 'currency_code': 'ETB'},
  {'country': 'European Union', 'currency_code': 'EUR'},
  // {'country': 'Falkland Islands (Malvinas) ', 'currency_code': 'FKP'},
  // {'country': 'Faroe Islands', 'currency_code': 'DKK'},
  {'country': 'Fiji', 'currency_code': 'FJD'},
  {'country': 'Finland', 'currency_code': 'EUR'},
  {'country': 'France', 'currency_code': 'EUR'},
  // {'country': 'French Guiana', 'currency_code': 'EUR'},
  // {'country': 'French Southern Territories', 'currency_code': 'EUR'},
  // {'country': 'Gabon', 'currency_code': 'XAF'},
  // {'country': 'Gambia', 'currency_code': 'GMD'},
  // {'country': 'Georgia', 'currency_code': 'GEL'},
  {'country': 'Germany', 'currency_code': 'EUR'},
  // {'country': 'Ghana', 'currency_code': 'GHS'},
  // {'country': 'Gibraltar', 'currency_code': 'GIP'},
  {'country': 'Great Britain', 'currency_code': 'GBP'},
  {'country': 'Greece', 'currency_code': 'EUR'},
  {'country': 'Greenland', 'currency_code': 'DKK'},
  // {'country': 'Guadeloupe (French) ', 'currency_code': 'EUR'},
  // {'country': 'Guam (USA) ', 'currency_code': 'USD'},
  // {'country': 'Guatemala', 'currency_code': 'QTQ'},
  // {'country': 'Guernsey', 'currency_code': 'GGP'},
  // {'country': 'Guinea', 'currency_code': 'GNF'},
  // {'country': 'Guinea Bissau', 'currency_code': 'GWP'},
  // {'country': 'Guyana', 'currency_code': 'GYD'},
  // {'country': 'Haiti', 'currency_code': 'HTG'},
  {'country': 'Australian Dollar', 'currency_code': 'AUD'},
  // {'country': 'Honduras', 'currency_code': 'HNL'},
  {'country': 'Hong Kong', 'currency_code': 'HKD'},
  {'country': 'Hungary', 'currency_code': 'HUF'},
  {'country': 'Iceland', 'currency_code': 'ISK'},
  {'country': 'India', 'currency_code': 'INR'},
  {'country': 'Indonesia', 'currency_code': 'IDR'},
  {'country': 'Iran', 'currency_code': 'IRR'},
  {'country': 'Iraq', 'currency_code': 'IQD'},
  {'country': 'Ireland', 'currency_code': 'EUR'},
  {'country': 'Isle of Man', 'currency_code': 'GBP'},
  {'country': 'Israel', 'currency_code': 'ILS'},
  {'country': 'Italy', 'currency_code': 'EUR'},
  // {'country': 'Ivory Coast', 'currency_code': 'XOF'},
  // {'country': 'Jamaica', 'currency_code': 'JMD'},
  {'country': 'Japan', 'currency_code': 'JPY'},
  // {'country': 'Jersey', 'currency_code': 'GBP'},
  // {'country': 'Jordan', 'currency_code': 'JOD'},
  // {'country': 'Kazakhstan', 'currency_code': 'KZT'},
  // {'country': 'Kenya', 'currency_code': 'KES'},
  // {'country': 'Kiribati', 'currency_code': 'AUD'},
  // {'country': 'Kuwait', 'currency_code': 'KWD'},
  // {'country': 'Kyrgyzstan', 'currency_code': 'KGS'},
  {'country': 'Laos', 'currency_code': 'LAK'},
  // {'country': 'Latvia', 'currency_code': 'LVL'},
  // {'country': 'Lebanon', 'currency_code': 'LBP'},
  // {'country': 'Lesotho', 'currency_code': 'LSL'},
  // {'country': 'Liberia', 'currency_code': 'LRD'},
  // {'country': 'Libya', 'currency_code': 'LYD'},
  // {'country': 'Liechtenstein', 'currency_code': 'CHF'},
  // {'country': 'Lithuania', 'currency_code': 'LTL'},
  // {'country': 'Luxembourg', 'currency_code': 'EUR'},
  {'country': 'Macau', 'currency_code': 'MOP'},
  // {'country': 'Macedonia', 'currency_code': 'MKD'},
  // {'country': 'Madagascar', 'currency_code': 'MGF'},
  // {'country': 'Malawi', 'currency_code': 'MWK'},
  {'country': 'Malaysia', 'currency_code': 'MYR'},
  {'country': 'Maldives', 'currency_code': 'MVR'},
  // {'country': 'Mali', 'currency_code': 'XOF'},
  // {'country': 'Malta', 'currency_code': 'EUR'},
  // {'country': 'Marshall Islands', 'currency_code': 'USD'},
  // {'country': 'Martinique (French)', 'currency_code': 'EUR'},
  // {'country': 'Mauritania', 'currency_code': 'MRO'},
  // {'country': 'Mauritius', 'currency_code': 'MUR'},
  // {'country': 'Mayotte', 'currency_code': 'EUR'},
  {'country': 'Mexico', 'currency_code': 'MXN'},
  // {'country': 'Micronesia', 'currency_code': 'USD'},
  // {'country': 'Moldova', 'currency_code': 'MDL'},
  // {'country': 'Monaco', 'currency_code': 'EUR'},
  {'country': 'Mongolia', 'currency_code': 'MNT'},
  // {'country': 'Montenegro', 'currency_code': 'EUR'},
  // {'country': 'Morocco', 'currency_code': 'MAD'},
  // {'country': 'Mozambique', 'currency_code': 'MZN'},
  {'country': 'Myanmar', 'currency_code': 'MMK'},
  // {'country': 'Namibia', 'currency_code': 'NAD'},
  // {'country': 'Nauru', 'currency_code': 'AUD'},
  {'country': 'Nepal', 'currency_code': 'NPR'},
  {'country': 'Netherlands', 'currency_code': 'EUR'},
  // {'country': 'Netherlands Antilles', 'currency_code': 'ANG'},
  // {'country': 'New Caledonia (French) ', 'currency_code': 'XPF'},
  {'country': 'New Zealand', 'currency_code': 'NZD'},
  // {'country': 'Nicaragua', 'currency_code': 'NIO'},
  // {'country': 'Niger', 'currency_code': 'XOF'},
  // {'country': 'Nigeria', 'currency_code': 'NGN'},
  // {'country': 'Niue', 'currency_code': 'NZD'},
  // {'country': 'Norfolk Island', 'currency_code': 'AUD'},
  {'country': 'North Korea', 'currency_code': 'KPW'},
  // {'country': 'Northern Mariana Islands', 'currency_code': 'USD'},
  {'country': 'Norway', 'currency_code': 'NOK'},
  // {'country': 'Oman', 'currency_code': 'OMR'},
  {'country': 'Pakistan', 'currency_code': 'PKR'},
  // {'country': 'Palau', 'currency_code': 'USD'},
  // {'country': 'Panama', 'currency_code': 'PAB'},
  // {'country': 'Papua New Guinea', 'currency_code': 'PGK'},
  // {'country': 'Paraguay', 'currency_code': 'PYG'},
  {'country': 'Peru', 'currency_code': 'PEN'},
  {'country': 'Philippines', 'currency_code': 'PHP'},
  // {'country': 'Pitcairn Island', 'currency_code': 'NZD'},
  {'country': 'Poland', 'currency_code': 'PLN'},
  // {'country': 'Polynesia (French) ', 'currency_code': 'XPF'},
  {'country': 'Portugal', 'currency_code': 'EUR'},
  // {'country': 'Puerto Rico', 'currency_code': 'USD'},
  {'country': 'Qatar', 'currency_code': 'QAR'},
  // {'country': 'Reunion (French) ', 'currency_code': 'EUR'},
  // {'country': 'Romania', 'currency_code': 'RON'},
  {'country': 'Russia', 'currency_code': 'RUB'},
  // {'country': 'Rwanda', 'currency_code': 'RWF'},
  // {'country': 'Saint Helena', 'currency_code': 'SHP'},
  // {'country': 'Saint Pierre and Miquelon', 'currency_code': 'EUR'},
  // {'country': 'Samoa', 'currency_code': 'WST'},
  // {'country': 'San Marino', 'currency_code': 'EUR'},
  // {'country': 'Sao Tome and Principe', 'currency_code': 'STD'},
  {'country': 'Saudi Arabia', 'currency_code': 'SAR'},
  // {'country': 'Senegal', 'currency_code': 'XOF'},
  // {'country': 'Serbia', 'currency_code': 'RSD'},
  // {'country': 'Seychelles', 'currency_code': 'SCR'},
  // {'country': 'Sierra Leone', 'currency_code': 'SLL'},
  {'country': 'Singapore', 'currency_code': 'SGD'},
  // {'country': 'Slovakia', 'currency_code': 'EUR'},
  // {'country': 'Slovenia', 'currency_code': 'EUR'},
  // {'country': 'Solomon Islands', 'currency_code': 'SBD'},
  // {'country': 'Somalia', 'currency_code': 'SOS'},
  {'country': 'South Africa', 'currency_code': 'ZAR'},
  {'country': 'South Korea', 'currency_code': 'KRW'},
  // {'country': 'South Georgia and the South Sandwich Islands', 'currency_code': 'GBP'},
  // {'country': 'South Sudan', 'currency_code': 'SSP'},
  {'country': 'Spain', 'currency_code': 'EUR'},
  {'country': 'Sri Lanka', 'currency_code': 'LKR'},
  // {'country': 'Sudan', 'currency_code': 'SDG'},
  // {'country': 'Suriname', 'currency_code': 'SRD'},
  // {'country': 'Svalbard and Jan Mayen Islands', 'currency_code': 'NOK'},
  // {'country': 'Swaziland', 'currency_code': 'SZL'},
  {'country': 'Sweden', 'currency_code': 'SEK'},
  {'country': 'Switzerland', 'currency_code': 'CHF'},
  {'country': 'Syria', 'currency_code': 'SYP'},
  {'country': 'Taiwan', 'currency_code': 'TWD'},
  // {'country': 'Tajikistan', 'currency_code': 'TJS'},
  // {'country': 'Tanzania', 'currency_code': 'TZS'},
  {'country': 'Thailand', 'currency_code': 'THB'},
  // {'country': 'Togo', 'currency_code': 'XOF'},
  // {'country': 'Tokelau', 'currency_code': 'NZD'},
  // {'country': 'Tonga', 'currency_code': 'TOP'},
  // {'country': 'Trinidad and Tobago', 'currency_code': 'TTD'},
  // {'country': 'Tunisia', 'currency_code': 'TND'},
  {'country': 'Turkey', 'currency_code': 'TRY'},
  // {'country': 'Turkmenistan', 'currency_code': 'TMT'},
  // {'country': 'Turks and Caicos Island', 'currency_code': 'USD'},
  // {'country': 'Tuvalu', 'currency_code': 'AUD'},
  {'country': 'U.K. ', 'currency_code': 'GBP'},
  // {'country': 'Uganda', 'currency_code': 'UGX'},
  // {'country': 'Ukraine', 'currency_code': 'UAH'},
  {'country': 'United Arab Emirates', 'currency_code': 'AED'},
  {'country': 'Uruguay', 'currency_code': 'UYU'},
  {'country': 'USA', 'currency_code': 'USD'},
  // {'country': 'USA Minor Outlying Islands', 'currency_code': 'USD'},
  // {'country': 'Uzbekistan', 'currency_code': 'UZS'},
  // {'country': 'Vanuatu', 'currency_code': 'VUV'},
  // {'country': 'Vatican', 'currency_code': 'EUR'},
  // {'country': 'Venezuela', 'currency_code': 'VEF'},
  {'country': 'Vietnam', 'currency_code': 'VND'},
  // {'country': 'Virgin Islands (British) ', 'currency_code': 'USD'},
  // {'country': 'Virgin Islands (USA) ', 'currency_code': 'USD'},
  // {'country': 'Wallis and Futuna Islands', 'currency_code': 'XPF'},
  // {'country': 'Western Sahara', 'currency_code': 'MAD'},
  // {'country': 'Yemen', 'currency_code': 'YER'},
  // {'country': 'Zambia', 'currency_code': 'ZMW'},
  // {'country': 'Zimbabwe', 'currency_code': 'ZWD'}
]

export default currencyCodes