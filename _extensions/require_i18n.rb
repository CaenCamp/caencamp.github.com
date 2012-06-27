require 'i18n'

I18n.load_path += Dir[File.expand_path(File.join(File.dirname(__FILE__), '../_config/locales', '*.yml')).to_s]

module Jekyll
  module Filters
    def localize date, format=nil, locale=nil
      locale = locale.nil? ? I18n.default_locale : locale.to_s.to_sym
      format = format.nil? ? :default : format.to_s.to_sym
      I18n.l(date.to_date, :locale => locale, :format => format)
    end
    
  end
  
  AOP.before(Site, :render) do |site_instance| 
    I18n.default_locale = (site_instance.config["default_locale"].nil? ? :en : site_instance.config["default_locale"].to_sym)
  end

end
