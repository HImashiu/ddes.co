
document.documentElement.lang = 'es';
/* ---------- Photos ---------- */
const CR = {'ebano-aerea':'DDES','ebano-fachada':'DDES','arte57-aerea':'DDES','arte57-calle':'DDES','arte57-voladizo':'DDES','arte57-fachada':'DDES','arte57-acceso':'DDES','hero-gruas':'Artem Labunsky','baq-skyline':'Dawin Rizzo','baq-ventana':'Carlos Sánchez','baq-atardecer':'Aider Barrios','baq-torres':'Aider Barrios','refuerzo-malla':'Ricardo Gómez Ángel','refuerzo-columnas':'Josué Isaí Ramos Figueroa','refuerzo-contrapicado':'Michael Bader','refuerzo-placa':'Etienne Girardet','ing-medicion':'Glenov Brankovic','ing-planos':'ThisisEngineering','ing-casco':'Jon Tyson','obra-aerea':'Ray Donnelly','acero-nave':'David Griffiths','acero-cercha':'Roman Serdyuk','planos-lapiz':'Sven Mieke','planos-dibujo':'Daniel McCullough','planos-azul':'Amsterdam City Archives','puente-obra':'Michael Myers','concreto-columnas':'Declan Sun','concreto-formaleta':'Julia Taubitz','fachada-andamio':'Jon Tyson'};
const credit = k => CR[k] ? (CR[k] === 'DDES' ? 'Foto: DDES' : `Foto: ${CR[k]} / Unsplash`) : '';
// k: photo key, or "p:<texto>" for a project photo still to be supplied
const LQ = {"arte57-aerea":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA0JCgsKCA0LCwsPDg0QFCEVFBISFCgdHhghMCoyMS8qLi00O0tANDhHOS0uQllCR05QVFVUMz9dY1xSYktTVFH/2wBDAQ4PDxQRFCcVFSdRNi42UVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAALABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCRvE96Bu89I8x8b0wN3oOOtGm+KNVYt5lxC+FUjdGOcg56VQvI0F6se0FDEVIPPHXvVOWFILUyRblZVAHzHoRnp9azfmVe2p1g8YXsfyskGfxP8qK4G6dmuGYsQTgnHHaiosxczP/Z","arte57-calle":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA0JCgsKCA0LCwsPDg0QFCEVFBISFCgdHhghMCoyMS8qLi00O0tANDhHOS0uQllCR05QVFVUMz9dY1xSYktTVFH/2wBDAQ4PDxQRFCcVFSdRNi42UVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAPABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDp7i/ls9OaSNlDcbSVBH4VkWniO7e6t/tnkSxvJsLBNpQdvWsC3sJbe2EV1q84VuiovA+g5py2VjEuBe3L7m3Y245qJVveuhRhpZnoH2sozDMa8/xYyaK8zls4JpC7SysT3bk/zoqvbrsT7KR//9k=","arte57-voladizo":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA0JCgsKCA0LCwsPDg0QFCEVFBISFCgdHhghMCoyMS8qLi00O0tANDhHOS0uQllCR05QVFVUMz9dY1xSYktTVFH/2wBDAQ4PDxQRFCcVFSdRNi42UVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAPABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCHRr5rNUj+xloHJ5VtxUgDpntjtXWWFxaTrugdXOfm+XBX6jtXHebNdWKB38uVWJBj4yNtYwutT+0C5HmxSKMB0den51cKrSt0InTV7nqyRgZ27QM+gorirXxbqUMCpPYxTv18xZNmR7j1orX20e5l7KXY/9k=","arte57-fachada":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA0JCgsKCA0LCwsPDg0QFCEVFBISFCgdHhghMCoyMS8qLi00O0tANDhHOS0uQllCR05QVFVUMz9dY1xSYktTVFH/2wBDAQ4PDxQRFCcVFSdRNi42UVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAbABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDM0jV9ViKwSpHcQAfKxxkAD1rvdGntL5R5BG5BiRDjcp9xXnmmAM/NvI2FPAAOeP8AZOa6bQHjt/ELYjUOwYHpu/HnP6VHO72K5Fud5Gg2/dHX0orOW4lOdpbGe1FOzFdHiFhLIkoKnbnj5eMj8K6CC71A3r3EcDbBkhjPjPHYdjVK0+5nofbithIYzGCVyfc1kyoplWbWLuaTfLc3BbpxGRj24Iop78OQAMfSimKx/9k=","arte57-acceso":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA0JCgsKCA0LCwsPDg0QFCEVFBISFCgdHhghMCoyMS8qLi00O0tANDhHOS0uQllCR05QVFVUMz9dY1xSYktTVFH/2wBDAQ4PDxQRFCcVFSdRNi42UVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAPABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDkbC4kgyMBs8MD0I7V1ekahdTyJF5KIDxvJJx+HeuY0+IPeshXKgZPNbtwRp+nu8CbWOB16c9q52jSGh3ViyQ2+0szknJLAUV59a+Jr4QKUG5TyD7UVnyMr2sT/9k=","ebano-aerea":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA0JCgsKCA0LCwsPDg0QFCEVFBISFCgdHhghMCoyMS8qLi00O0tANDhHOS0uQllCR05QVFVUMz9dY1xSYktTVFH/2wBDAQ4PDxQRFCcVFSdRNi42UVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAALABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCnMtvGIgHXd5QU5IHI571rHVbqaeWRC5iSOLZEvIz0OPrisuw/euFk+YDGAeayrySSCUCKR1GB0Y+9c6bSuaVJK70NHUmW8vXuGgMLP1jAzt7YzRWW7u4RixyV5opb6saqJKyP/9k=","ebano-fachada":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA0JCgsKCA0LCwsPDg0QFCEVFBISFCgdHhghMCoyMS8qLi00O0tANDhHOS0uQllCR05QVFVUMz9dY1xSYktTVFH/2wBDAQ4PDxQRFCcVFSdRNi42UVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAbABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDuHSEsVX5ZEA4I56Vza6/9sFxbmFklRsZIBBAPqPpT7bUo7XTC00p8xpRHE7nPTGf61zdqSk15JGw3MHIww4Ofr/Ss5z0si4RV9TRXUruzeSFL2VAHJwCP60Vk2uohYFDsxYdSOaK5eeS0Oi9N66GRd3d1eRJGQ2Ym+VQQcseozTVn1QPJi1U7QU3bOSD1961HIGAEjA4P3B/hTPtEoJw36CumxymH/aUn3dwi2/LtIyaK3FmkIyWyfoKKORCsf//Z","acero-cercha":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAALABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC95MttGFuAHtYz8ksQ43DptY8gDA4PHHWkkkkknNxHJC07geZKFwCMYAP918ZHpj8KunNl4ngsbdmW1WMFYmYsF47Zziq97EkenW9xGNsk74kKkgMDyQR0xV3JsQW32hUb+zzbRwFshJl5B7/hRUs1vE08mYwcEAewwKKYj//Z","acero-nave":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDYhu7uF3G1SCVUI7DjJAqzJdMjDzTCM/TFcWdTvJPle4kZSOQWPOMGozfyTHbNvdemDIaam0S6aZ28WpW5U5lgHPH7wCiuMSeEj5oGz04lYUUe1kHsYn//2Q==","baq-atardecer":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAOABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBlvppbGB+lXZNPjggMsrIiDuxAribbUEhO7bcMcf8APww/lTLqcTINnmBCSdrSFuScmjmlcOWFjUvPEEEU+22j3pj7xGOaK53bRTuyeVH/2Q==","baq-skyline":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAPABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDOm05XbKBFGBwrZFDaSCcqrL04659aybO5ZonJ8zZFgDBBAPbr7+ldHZzSzNAiuSikbo+hcgcnPrgV1fW5LoZeyXcqJpnB6de5orX1IBbhTvZAyDCg9AOP6UUfXZdhewXc/9k=","baq-torres":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAbABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDT1C6isIvMmRmUkKNuMg4qOe4iiSItx5mD07Gs/WL+31VTDasSqHK4By/Hp+dSXMsF1p8cithhGECnqGHrXdGtB9Tz5wmtkbEEUoQ7cAZ9qKkN7Z22EuZQkhAbGCeooo9vHuV7JnMtZ/aZ3mabLy4DFVAIH06VZgtIwoQOyDvnAyfyrRkjjbTll8tA5K5KqB29qqykpJbspILuVbnqBXDKEXudqZZS1AQCWVpCOhfaTiiq1zbxyS7mDE4/vGisnCPYs//Z","baq-ventana":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAeABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDkaKltIxLeQxsMh3AIq3q9qtpLiAMsLngN16DrSur2B7XKAooHSiqAs6XgapaE9PNX+danivb9oiK5yzNkHpxgVVDyxwpcIIl+fjYgBB656VBd3k93s88iQoCAzDnmocfe5idyDdAQP3bZxzhuM0VGBRTsUf/Z","concreto-columnas":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDlrSzEshDr5bL6E7j9Bg9v5V01rHdWcgC+fepJGwWKTCMeh/EEYrC0KdWuIrV4VPmHAkUlWH1x1rptWin0yC2kt7kkoDt3jdgccdenFILGc89yMNHo6srDOFydvseevFFc/fahc3F0zmVlPcKcCinoLU//2Q==","concreto-formaleta":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCS100iylS4MULx4aNiw+Xtzz0PFVCiTRvvBLRocEdQQcY9+tbAs2traUmUENGAFjjVMDjHrWLMrJJIVcjPJ+uaxZvF6kUdlGUyyOT67aKVFSTcSuCDjgkZoqtQ0P/Z","fachada-andamio":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCa8sXjdt6rtEYIO4euf6Uy9cPbTSouJ7UAggcbhzVhbqSMuDh1dAoDckde9U9WtjDBdPHK20KGw3JOR0JrNlI5mUsxVj1I5/OinsFZULLk4/rRSsO5/9k=","hero-gruas":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCmunlLiaMEA4D4NQuikuNp4k2dO+BXV3kSQazYoFB+1ZQ+2FLZ/Sqmo2Shp8ORvl9OAQo5H51mqjOnli9jmWtSGICk/QUVTvfEU0N08UUEQVDt+bJJI79qK6FUOdxjc//Z","ing-casco":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDE0+aIeW5nKXMTqECx5IUd8+tdBdXlvc2kdtKgcxq5jeOI4BLHOc+46Vz9iyQqZBGrOEOGPXpUZYiNGj+T5QpHX+dclSHN1sdEZuJrfZbYKoMxDADdiBuv4CisU6jdJhVmcKBgDcaK3UY2/wCB/wAE5pSqX0/P/gH/2Q==","ing-medicion":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDG0exVraK7mjhYl/3Kyc52/e49KYXgl1q4eKKNlwxjBQsoAzzjjoK1dIiRtI09mUMyoSpPYnJrM0cj7Xqsm0bhC4B7jJ5rNSvcBJ7A28pRmXn5gU6EHkEUUXkzGVPaNR+lFUB//9k=","ing-planos":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBdIlsdRKQLbhBH90PHuAOPX1pmuC2kH2K20zcOPMmRQgA/HlqzrC2Wa6hXcVJdRuHUc1Bqms3cGq3T7w7RKUTKjjJxn361VbDKlLQijiPbK8kW4rTTY4lDJGSeeXorj2LOxZmJYnJNFZcsu5vzx7H/2Q==","obra-aerea":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAPABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCC6gsgrxiaMvIAGMIznHP61FFpjoiBbTyyzBFaR8Fs59BW6unrBcxwW8SB2TPX7vHBzVpLFoZ4iwIZmKlQeDx1qR3MD+zIo/luLh7duykryOxGaK2ktbm4XN5DAZkOwlAMYHTrRTEf/9k=","planos-azul":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAQABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCgAd3H8qfs4bOMr+tKNvHHP0pwwxYZP1rqOcWPAQZA5+lFJsIHUH6UUCP/2Q==","planos-dibujo":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAALABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmNKjM0bRpbu8sjBUfkL754roLrS7qy0eUbfswVSWMfzDpzg+5rc8JgXnhyGW4AkcqfmI9K5LWNUvp4JVluZGVG2qM8AZqXe5StYLC7ju7YNPPp1qyHbta2yW754+v6UVm2FxLDAVjbA3Z6A0VrcwaR//Z","planos-lapiz":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC1gBfJuIypOAQ4xRFILaTyjtyehxyRWxb7by0LSICi4yj/ADDp2PUVXv8ASo4LY3ULkAfwMN360WC5RLAnhlNFQJKTnjv60UAf/9k=","puente-obra":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwB9rLY3JAhuYWJGcbgD+Rqz51jDcCCS6gWQruwzAcdua8684nsOnpVm3aW4JjMpAkKq3fIHArfnk3ozLlit0egw61oscYEt/bqx5wDux+Qorz6a0EUrJuzg+mKKd5itE//Z","refuerzo-columnas":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAPABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC9p+r5upROwXewIc9OTxXQPI660uxxho9rZ7Acj+v5Vw6wvsKKQWdUKn3zXR6rdT2WrpL5aybVCYLYG4ipUu5Tj2OkWR8HODz6gUVziasboeYEeMdMAg0U3NE8rP/Z","refuerzo-contrapicado":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDr7vUreyt/NlOOMBNvzEgdMVm2PiH7VcywPGqN1j49OCPqK5i8vJ7z/SJ33SSFVJxwB6AelRyBoG81HbfFLkE9/aspTdwUEdb9lhdnZ0WQsxJLjJ5optq7NCGz1orO5ep//9k=","refuerzo-malla":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAMABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCqZmGANuABxjrVS9u5QQIo0O7qzrkj6VoPboU38g47U2K3QjJya5bpanRZvQiihLJkMG9wKK1IIlMfcewopczHZH//2Q==","refuerzo-placa":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA8KCw0LCQ8NDA0REA8RFiUYFhQUFi0gIhslNS84NzQvNDM7QlVIOz9QPzM0SmRLUFdaX2BfOUdob2dcblVdX1v/2wBDARARERYTFisYGCtbPTQ9W1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCPTL2xsHVRaswddpmA3MCe3tWhqNuLuSSBIHYrjEqAEMcZyfT0qloWnf2nFOZJdgjAxtXk07VITps5MEjq0igHaSo6Y6VZldGJNpk6Ph4ssRk7AcA0VYTW7kl/NCOwbBbGM0UuYfKf/9k="};
const SIZES = {pano: '100vw', wide: '(max-width: 860px) 92vw, 62vw', std: '(max-width: 860px) 92vw, 42vw', tall: '(max-width: 760px) 80vw, 30vw', sq: '(max-width: 760px) 80vw, 28vw'};
// Our own building photographs: a soft, see-through wash of the studio's orange over everything around the building; the
// building itself stays clear. Each outline is traced on the photograph in its own pixels; the wash is masked with it (cover
// sizing, like the image) and moves with the image through the parallax, the settle and the hover zoom.
const MASKS = {
  // [width, height, outline, fade]: the outline's lower part fades between the two heights, so the building settles into
  // the colour instead of ending on a cut line
  'arte57-aerea': [2000, 1125, '597,215 602,178 606,162 740,156 870,154 890,164 1108,164 1110,192 1180,192 1204,206 1370,206 1372,286 1428,288 1428,625 1475,632 1475,760 1275,832 1230,858 1140,862 1010,820 920,810 870,760 690,720 620,710 597,680', [700, 865]],
  'arte57-calle': [512, 384, '150,46 209,48 211,53 287,54 290,65 300,66 364,91 380,165 397,210 421,211 430,235 447,257 447,274 300,276 150,272 75,272 76,221 111,220 125,160 145,56', [236, 278]],
  'arte57-fachada': [384, 512, '0,4 9,15 102,50 149,64 150,79 159,88 250,149 253,161 265,280 272,320 302,330 307,367 320,380 320,427 200,430 0,440', [392, 440]],
  'arte57-voladizo': [512, 384, '0,0 71,0 72,59 103,67 90,71 512,296 512,384 0,384'],
  'ebano-aerea': [512, 288, '240,23 306,16 344,16 383,36 383,167 350,186 320,205 302,210 300,235 280,245 252,245 241,235', [196, 246]],
  'ebano-fachada': [384, 512, '154,66 235,91 261,98 269,210 278,345 280,400 240,410 200,450 125,450 125,410 105,390 106,252 115,192 124,172 142,95 145,92', [372, 452]]
};
const maskOf = k => { const m = MASKS[k]; if (!m) return ''; const [w, h, pts, fd] = m;
  const fill = fd ? `<linearGradient id="g" gradientUnits="userSpaceOnUse" x1="0" y1="${fd[0]}" x2="0" y2="${fd[1]}"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>` : '';
  return `url('data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs>${fill}<filter id="f"><feGaussianBlur stdDeviation="${(w / 320).toFixed(1)}"/></filter></defs><polygon points="${pts}" filter="url(#f)"${fd ? ' fill="url(#g)"' : ''}/></svg>`)}')`; };
const PH = (k, ar = 'std', alt = '', cls = '', eager) => k.startsWith('p:')
  ? (() => { const n = k.slice(2), pr = (typeof PRJ !== 'undefined') && PRJ.find(x => n.startsWith(x.name)), sh = pr && pr.shot;
      return `<div class="ph pending ${cls}" data-ar="${ar}"><i class="reg" aria-hidden="true"></i><span><b>${n}</b></span></div>`; })()
  : `<div class="ph ${cls}${MASKS[k] ? ' pop' : ''}" data-ar="${ar}"${LQ[k] || MASKS[k] ? ` style="${LQ[k] ? `--lq:url(${LQ[k]});` : ''}${MASKS[k] ? `--mk:${maskOf(k)}` : ''}"` : ''}>${MASKS[k] ? '<span class="phin">' : ''}<img src="/fotos/${k}.jpg" srcset="/fotos/m/${k}.jpg 960w, /fotos/${k}.jpg 1600w" sizes="${/fill/.test(cls) ? '100vw' : SIZES[ar] || SIZES.std}" alt="${alt}" ${eager ? (eager === 'hi' ? 'fetchpriority="high"' : '') : 'loading="lazy"'} decoding="async" onload="this.classList.add('ok')">${MASKS[k] ? `<i class="orl" aria-hidden="true"></i></span><span class="popw" aria-hidden="true"><img class="pop" src="/fotos/${k}.jpg" srcset="/fotos/m/${k}.jpg 960w, /fotos/${k}.jpg 1600w" sizes="${/fill/.test(cls) ? '100vw' : SIZES[ar] || SIZES.std}" alt="" loading="lazy" decoding="async" onload="this.classList.add('ok')"></span>` : ''}</div>`;
const FIG = (k, ar, alt, cap) => `<figure>${PH(k, ar, alt)}<figcaption><span>${cap || ''}</span><span class="credit">${credit(k)}</span></figcaption></figure>`;
const ARR = '<svg aria-hidden="true"><use href="#arr"/></svg>';
const LINK = (href, t) => `<a class="link" href="${href}">${t} ${ARR}</a>`;

/* ---------- Content ---------- */
const SVC = [
  {id:'diseno', name:'Diseño estructural', tagline:'Estructuras eficientes, seguras y pensadas para construirse.', hero:'concreto-columnas', card:'planos-lapiz',
   short:'Edificaciones en concreto, acero y mampostería diseñadas bajo la NSR-10, desde la concepción hasta el despiece.',
   intro:'Diseñamos la estructura completa de edificaciones nuevas, desde el sistema estructural hasta los planos de despiece que usa el maestro de obra. Todo bajo la NSR-10 y pensado para el lugar: en la costa, suelos blandos, nivel freático alto y un ambiente marino que ataca el acero; en el interior, la amenaza sísmica alta de buena parte del país.',
   blocks:[
    ['Concreto, acero y mampostería','Elegimos el sistema según el proyecto y no por costumbre: pórticos, muros, sistemas duales, losas postensadas, estructura metálica o mampostería reforzada. Antes de decidir comparamos cantidades y tiempo de obra.','acero-cercha','Estructura metálica en montaje.'],
    ['Cimentaciones para suelos costeros','Trabajamos con el estudio de suelos desde el primer día. Pilotes, placas y zapatas pensados para las arcillas expansivas del suroccidente, las arenas sueltas cerca del río y los asentamientos diferenciales.','obra-aerea','Obra en etapa de cimentación.'],
    ['Del modelo al plano','Analizamos en ETABS, SAP2000 y SAFE y documentamos en Revit. Planos, despieces y cantidades salen del mismo modelo: lo que se calcula es lo que se dibuja.','planos-dibujo','Revisión de planos estructurales.']],
   deliver:['Memoria de cálculo firmada','Planos estructurales y de cimentación','Cartillas de despiece y cantidades de obra','Modelo de análisis','Acompañamiento en curaduría hasta la licencia'],
   steps:[['Concepción','Definimos el sistema estructural con arquitectura y comparamos alternativas.'],['Predimensionamiento','Secciones iniciales, cargas y verificación de derivas.'],['Análisis y diseño','Modelo completo y diseño de cada elemento.'],['Planos y despiece','Documentación para licencia y para obra.'],['Acompañamiento','Observaciones de curaduría y consultas de obra.']],
   faq:[['¿Cuánto tarda un diseño estructural?','Depende del tamaño y de qué tan definida esté la arquitectura. Como referencia, una edificación de cinco pisos suele tomar entre cuatro y seis semanas, y una torre de veinte pisos, entre tres y cuatro meses.'],['¿Qué necesitan para empezar?','Planos arquitectónicos, estudio de suelos y levantamiento topográfico. Si todavía no tiene estudio de suelos, le ayudamos a definir qué pedirle al geotecnista.'],['¿El diseño incluye el trámite en curaduría?','Sí. Respondemos las observaciones estructurales de la curaduría y del revisor independiente hasta que se expida la licencia.']],
   projects:['cannon','gale','casagrande'], related:['revision','bim','supervision']},
  {id:'interventoria', name:'Interventoría de obra', tagline:'Control técnico, administrativo y financiero de la obra.', hero:'obra-aerea', card:'refuerzo-placa',
   short:'Representamos al propietario: calidad, plazo y presupuesto de obras públicas y privadas.',
   intro:'Representamos al propietario en la obra. Controlamos que se construya lo contratado, con la calidad exigida, en el plazo y por el valor pactado, en proyectos públicos y privados.',
   blocks:[
    ['Control técnico','Calidad de materiales y procesos, cumplimiento de especificaciones y aprobación de cada actividad antes de pagarla.','refuerzo-placa','Placa en ejecución.'],
    ['Control administrativo y financiero','Actas de avance, cantidades, obras adicionales y balance del contrato. Cada mes, el propietario sabe cuánto se ha ejecutado y cuánto falta.','ing-planos','Comité de obra.'],
    ['Entrega y liquidación','Recibo de obra, pólizas, manuales y liquidación del contrato. Cerramos el proyecto sin cabos sueltos.','puente-obra','Obra de infraestructura en construcción.']],
   deliver:['Informes mensuales de interventoría','Actas de obra y de cantidades','Control de cronograma y presupuesto','Concepto sobre obras adicionales','Acta de liquidación'],
   steps:[['Arranque','Contrato, pólizas y cronograma.'],['Seguimiento','Comités de obra y actas mensuales.'],['Control','Calidad, cantidades y pagos.'],['Cierre','Recibo, liquidación y entrega.']],
   faq:[['¿En qué se diferencia de la supervisión técnica?','La supervisión técnica verifica la estructura frente a la NSR-10 y la Ley 1796. La interventoría controla el contrato completo, con calidad, plazo y costo, en nombre del propietario.'],['¿Trabajan con entidades públicas?','Sí. Conocemos los informes y soportes que exigen los contratos públicos y los entes de control.'],['¿Cada cuánto recibo informes?','Un informe mensual completo, y actas de comité cada semana o cada quince días, según el contrato.']],
   projects:['solemio','centurion','cannon'], related:['supervision','diseno','bim']},
  {id:'supervision', name:'Supervisión técnica', tagline:'La obra se construye como fue diseñada.', hero:'refuerzo-columnas', card:'ing-medicion',
   short:'Supervisión técnica independiente según la Ley 1796 y el Título I de la NSR-10, antes de cada fundida.',
   intro:'La supervisión técnica independiente verifica en obra que la estructura se construya según los planos, las especificaciones y la NSR-10. Es obligatoria por la Ley 1796 de 2016 cuando el lote permite construir más de 2.000 m², sin importar el uso, y es la base del Certificado Técnico de Ocupación. Estamos en obra en los momentos que importan: antes de cada fundida.',
   blocks:[
    ['Antes de fundir, verificamos','Refuerzo, traslapos, recubrimientos, anclajes y formaletas se revisan elemento por elemento. Nada se funde sin liberación escrita del supervisor.','refuerzo-malla','Revisión de la malla de refuerzo de una placa.'],
    ['Control de materiales','Cilindros de concreto a 7, 14 y 28 días, asentamiento en cada mixer y certificados del acero. Llevamos la estadística de resistencias y avisamos a tiempo cuando algo no cumple.','concreto-formaleta','Formaleta lista para inspección.'],
    ['Un registro que respalda la obra','Bitácora, actas de visita, informes mensuales e informe final firmado. Un expediente completo para el propietario, la curaduría y el Certificado Técnico de Ocupación.','ing-planos','Revisión de planos en obra.']],
   deliver:['Plan de supervisión','Actas de liberación antes de cada fundida','Control estadístico de resistencias','Informes mensuales','Informe final para el Certificado Técnico de Ocupación'],
   steps:[['Revisión de planos','Estudiamos planos y memoria y señalamos lo difícil de construir.'],['Plan de supervisión','Visitas, ensayos y puntos de control acordados por escrito.'],['Inspección','Refuerzo y formaletas revisados antes de cada fundida.'],['Ensayos','Cilindros, asentamiento y certificados del acero.'],['Informe final','Registro firmado para el Certificado Técnico de Ocupación.']],
   checks:[['Resistencia del concreto','f′c de diseño a 28 días'],['Recubrimiento en ambiente marino','50 mm o más'],['Acero de refuerzo','fy 420 MPa'],['Asentamiento','± 25 mm del especificado'],['Deriva de piso','≤ 1,0 % de la altura']],
   faq:[['¿Mi proyecto necesita supervisión técnica?','Si el lote permite construir más de 2.000 m², la Ley 1796 la hace obligatoria, sea cual sea el uso. En proyectos más pequeños no es exigida, pero es la forma más barata de evitar errores que después cuestan mucho.'],['¿Cada cuánto visitan la obra?','Según el plan de supervisión que acordamos al inicio. Como mínimo estamos antes de cada fundida de elementos estructurales, y en etapas críticas la visita es diaria.'],['¿Puede supervisar el mismo constructor?','No. La ley exige que el supervisor sea independiente del constructor. Esa independencia es lo que le da valor al certificado.']],
   projects:['solemio','ebano','galapa'], related:['diseno','interventoria','patologia']},
  {id:'revision', name:'Revisión independiente', tagline:'Una segunda firma revisa el diseño antes de la licencia.', hero:'ing-planos', card:'planos-azul',
   short:'Revisión de diseños estructurales de terceros, obligatoria en proyectos de más de 2.000 m².',
   intro:'La Ley 1796 exige que un profesional independiente del diseñador revise los diseños estructurales cuando el lote permite construir más de 2.000 m², como requisito de la licencia de construcción. Revisamos modelo, memoria y planos, y entregamos observaciones claras que el diseñador puede resolver rápido.',
   blocks:[
    ['Revisión del modelo','Verificamos cargas, sistema estructural, irregularidades, derivas y el diseño de los elementos críticos, sobre el modelo del diseñador y con modelos propios de comprobación.','planos-lapiz','Revisión de detalles estructurales.'],
    ['Observaciones que se pueden cerrar','Cada observación indica el elemento, el artículo de la NSR-10 y lo que falta para cerrarla. Menos ciclos de ida y vuelta, menos semanas perdidas.','planos-azul','Planos de una edificación en revisión.'],
    ['Memorial para la curaduría','Cuando el diseño cumple, firmamos el memorial de revisión que la curaduría exige para expedir la licencia.','baq-torres','Torres en el norte de Barranquilla.']],
   deliver:['Informe de revisión con observaciones','Modelo de comprobación','Seguimiento a las respuestas del diseñador','Memorial de revisión firmado'],
   steps:[['Recepción','Planos, memoria, estudio de suelos y modelo.'],['Revisión','Modelo y elementos críticos.'],['Observaciones','Informe con cada punto a resolver.'],['Cierre','Verificación de respuestas y firma.']],
   faq:[['¿Cuánto tarda la revisión?','La primera ronda de observaciones suele estar lista en dos a tres semanas, según el tamaño del proyecto. Las rondas siguientes son más cortas.'],['¿Revisan sus propios diseños?','No. La revisión solo tiene sentido si la hace alguien distinto al diseñador. Si diseñamos un proyecto, lo revisa otra firma.'],['¿Qué pasa si el diseño no cumple?','Entregamos las observaciones con la referencia a la norma. El diseñador ajusta, nosotros verificamos, y firmamos cuando todo está cerrado.']],
   projects:['centurion','ebano','gale'], related:['diseno','supervision','bim']},
  {id:'patologia', name:'Patología y reforzamiento', tagline:'Diagnóstico y solución para estructuras existentes.', hero:'fachada-andamio', card:'refuerzo-contrapicado',
   short:'Evaluación de daños, vulnerabilidad sísmica y diseño de reforzamiento para edificaciones existentes.',
   intro:'Fisuras, acero corroído, asentamientos o un cambio de uso: evaluamos edificaciones existentes, encontramos la causa y diseñamos el reforzamiento. En la costa, la corrosión por cloruros es la causa más común de daño en estructuras de concreto con más de treinta años.',
   blocks:[
    ['Diagnóstico en sitio','Núcleos, esclerometría, ferroscan para ubicar el refuerzo, profundidad de carbonatación y contenido de cloruros. Los ensayos confirman lo que sugiere la inspección visual.','refuerzo-contrapicado','Refuerzo expuesto en una columna.'],
    ['Vulnerabilidad sísmica','Evaluamos la estructura existente según el capítulo A.10 de la NSR-10 y definimos si debe reforzarse para su uso actual o para uno nuevo.','concreto-columnas','Estructura existente de concreto.'],
    ['Reforzamiento','Encamisados de concreto, platinas y fibra de carbono, arriostramientos metálicos y recalces de cimentación. Diseñamos la solución y acompañamos su construcción.','acero-cercha','Refuerzo con estructura metálica.']],
   deliver:['Informe de patología con registro fotográfico','Resultados de ensayos','Estudio de vulnerabilidad sísmica','Diseño y planos de reforzamiento','Acompañamiento en obra'],
   steps:[['Inspección','Levantamiento de daños y de la estructura.'],['Ensayos','Núcleos, ferroscan, carbonatación y cloruros.'],['Diagnóstico','Causa del daño y estado de la estructura.'],['Reforzamiento','Diseño y acompañamiento en obra.']],
   faq:[['¿Mi edificio es seguro?','Una inspección inicial dice si hay un riesgo inmediato y qué tan urgente es actuar. El diagnóstico completo, con ensayos, dice qué tan grave es el daño y cuánto cuesta repararlo.'],['¿Se puede reforzar con gente viviendo en el edificio?','En muchos casos sí. Diseñamos el reforzamiento para ejecutarlo por etapas y con el menor impacto posible para los residentes.'],['¿Qué pide la ley para un edificio antiguo?','Si cambia el uso, se amplía o se modifica la estructura, la NSR-10 exige evaluar la vulnerabilidad y, si hace falta, reforzar.']],
   projects:['solemio','ebano','cannon'], related:['diseno','supervision','interventoria']},
  {id:'bim', name:'BIM y coordinación', tagline:'Las interferencias se resuelven en pantalla, no en obra.', hero:'planos-azul', card:'acero-nave',
   short:'Modelos estructurales en Revit coordinados con arquitectura y redes, con cantidades desde el modelo.',
   intro:'Modelamos la estructura en Revit y la coordinamos con arquitectura, redes hidráulicas, eléctricas y de aire acondicionado. Los choques entre disciplinas aparecen en el modelo meses antes de llegar a la obra.',
   blocks:[
    ['Modelos LOD 300–400','Geometría, refuerzo y conexiones modelados con el detalle que pide cada etapa del proyecto.','acero-nave','Nave metálica en montaje.'],
    ['Detección de interferencias','Cruzamos los modelos de todas las disciplinas y entregamos reportes de interferencias con responsable y fecha de solución.','planos-dibujo','Coordinación entre disciplinas.'],
    ['Cantidades desde el modelo','Concreto, acero y formaleta cuantificados directamente del modelo, listos para presupuesto y compras.','concreto-formaleta','Formaleta y refuerzo cuantificados.']],
   deliver:['Modelo estructural en Revit','Reportes de interferencias','Cantidades de obra','Planos generados desde el modelo'],
   steps:[['Estándares','Plan de ejecución BIM.'],['Modelado','Estructura desde el diseño.'],['Coordinación','Sesiones semanales entre disciplinas.'],['Entrega','Modelo, planos y cantidades.']],
   faq:[['¿Qué programas usan?','Revit para modelar, Navisworks para coordinar y ETABS, SAP2000 y SAFE para el análisis.'],['¿Pueden modelar un diseño que no hicieron ustedes?','Sí. Modelamos a partir de planos existentes y señalamos las inconsistencias que aparezcan.'],['¿Qué nivel de detalle necesito?','Para licencia suele bastar un LOD 300. Para fabricar y cuantificar con precisión, LOD 350 a 400.']],
   projects:['cannon','centurion','galapa'], related:['diseno','revision','interventoria']}
];
const CATS = {edificios:'Edificaciones', industrial:'Industrial', infraestructura:'Infraestructura', comercial:'Comercial', institucional:'Institucional'};
const PRJ = [
  {id:'solemio', name:'Altos de Solemio', loc:'Interventoría y diseño · 2021–2026', city:'', cat:'edificios', year:'2021–2026', svc:['interventoria','diseno'], shot:'S01',
   summary:'Interventoría por etapas de un desarrollo de torres de vivienda y un lote comercial, con el rediseño de sus obras exteriores.',
   scope:['Interventoría de las etapas 1 a 6, con comités de obra, actas y bitácora.','Recepción de muros y elementos piso por piso, serie por serie.','Registro fotográfico continuo de la obra: más de nueve mil fotografías.','Rediseño de la losa de acceso, el canal, el muro de contención y las pérgolas.','Diseño del pavimento y de la zona de baños, en 2026.']},
  {id:'cannon', name:'Industrias Cannon', loc:'Diseño e interventoría · 2023–2025', city:'', cat:'industrial', year:'2023–2025', svc:['diseno','interventoria'], shot:'C01',
   summary:'Diseño estructural e interventoría de una planta industrial, desde la licencia de construcción hasta la estructura.',
   scope:['Diseño estructural y detalles constructivos.','Revisión de la licencia de construcción y del estudio de suelos.','Control de calidad de materiales.','Seguimiento por frentes: preliminares, excavación, estructura, redes hidráulicas y muros livianos.','Cantidades de obra, actas de pago y balance financiero.','Bitácora, informes y comités de obra.']},
  {id:'centurion', name:'Bodegas Centurión', loc:'Interventoría, revisión y diseño · 2023–2026', city:'', cat:'industrial', year:'2023–2026', svc:['interventoria','revision','diseno'], shot:'N01',
   summary:'Interventoría de las bodegas C10 y C11 hasta su cierre, revisión de sus diseños y diseño de las bodegas C9 y C5.',
   scope:['Interventoría de las bodegas C10 y C11 hasta el cierre del proyecto.','Revisión de los diseños estructurales antes de construir.','Más de trescientos documentos de control: órdenes, cotizaciones y comparativos.','Plan de gestión, programaciones de obra y bitácora.','Diseño estructural de las bodegas C9 y C5, en 2026.']},
  {id:'ebano', name:'Edificio Ébano', loc:'Interventoría y diseño · 2023–2024', city:'', cat:'edificios', year:'2023–2024', svc:['interventoria','diseno'], shot:'E01', ph:{portada:'ebano-aerea', 'detalle de obra':'ebano-fachada'},
   summary:'Interventoría de un edificio con el concreto controlado en laboratorio, pedido por pedido.',
   scope:['Control del concreto con laboratorio externo: pedidos, cubicación y resultados de resistencia.','Treinta y dos cortes de obra revisados.','Veinticuatro informes de interventoría.','Revisión de modificaciones estructurales durante la obra.','Contratos, comparativos y liquidaciones.']},
  {id:'arte57', name:'Edificio Arte 57', loc:'Diseño estructural · 2020', city:'', cat:'edificios', year:'2020', svc:['diseno'], ph:{portada:'arte57-aerea', 'vista general':'arte57-calle', 'detalle de obra':'arte57-voladizo', estructura:'arte57-fachada'},
   summary:'Diseño estructural de un edificio de vivienda en ladrillo a la vista, rematado por una losa de cubierta en voladizo con celosía de concreto.',
   scope:['Diseño estructural del edificio, en 2020.','Losa de cubierta en voladizo sobre la fachada, con celosía de concreto.','Terrazas en voladizo en cada piso.']},
  {id:'gale', name:'Edificio Galé', loc:'Diseño e interventoría · 2025–2026', city:'', cat:'edificios', year:'2025–2026', svc:['diseno','interventoria'], shot:'L01',
   summary:'Diseño estructural del edificio y preparación de su interventoría: pliego, presupuesto y comparativo de ofertas.',
   scope:['Diseño estructural.','Etapa preliminar y flujogramas de aprobación.','Pliego de condiciones y presupuesto de obra.','Comparativo de ofertas de contratistas.','Comités de obra.']},
  {id:'casagrande', name:'Edificio Casa Grande', loc:'Diseño e interventoría · 2023', city:'', cat:'edificios', year:'2023', svc:['diseno','interventoria'], shot:'K01',
   summary:'Diseño estructural e interventoría de la construcción del edificio.',
   scope:['Diseño estructural.','Interventoría de la construcción.']},
  {id:'galapa', name:'Bodega en Galapa', loc:'Galapa, Atlántico · interventoría', city:'Galapa, Atlántico', cat:'industrial', year:'2026', svc:['interventoria'], shot:'G01',
   summary:'Interventoría de una bodega industrial, con revisión de planos estructurales y estudio de suelos.',
   scope:['Revisión de planos estructurales y del estudio de suelos.','Informes de interventoría.','Comités de obra.','Registro fotográfico.']}
];
// The design archive, year by year (project names as they appear in the archive; private houses are left out)
const TRAY = [
  ['2026', [['Centro Comercial Metropolitano', 'comercial'], ['Bodegas Centurión C9 y C5', 'industrial'], ['Altea', 'edificios'], ['Carrara', 'edificios'], ['Jamar', 'comercial'], ['Pavimento de Altos de Solemio', 'infraestructura']]],
  ['2025', [['Centro Comercial H3', 'comercial'], ['Edificio Galé', 'edificios'], ['Industrias Cannon', 'industrial'], ['Bello Horizonte', 'edificios'], ['Muro de contención de Solemio', 'infraestructura'], ['Administración Centurión', 'industrial']]],
  ['2024', [['Revisiones de diseño y conceptos técnicos', '']]],
  ['2023', [['Edificio Ébano', 'edificios'], ['Edificio Casa Grande', 'edificios'], ['Industrias Cannon', 'industrial'], ['Punta Roca', 'edificios'], ['Cubiertas de los centros comerciales Miramar y Americano', 'comercial'], ['Antena universitaria', 'institucional'], ['Triple A', 'infraestructura']]],
  ['2022', [['Centro Comercial Solemio', 'comercial'], ['Leonardo', 'edificios']]],
  ['2021', [['Clínica en Palmar de Varela', 'institucional'], ['Mirador Cartagena', 'edificios'], ['Lagos de Caujaral', 'edificios'], ['Altos de Solemio', 'edificios']]],
  ['2020', [['Hospital Cary', 'institucional'], ['Edificio Malibú', 'edificios'], ['River Plate', 'edificios'], ['Arte 57', 'edificios'], ['Acuarela', 'edificios'], ['Bodega Coca-Cola', 'industrial'], ['Torri di Milano', 'edificios'], ['Terra', 'edificios']]]
];
const ART = [
  {id:'cloruros', title:'Cloruros y refuerzo: el recubrimiento que sí protege', cat:'Durabilidad', img:'refuerzo-contrapicado', read:'4 min', dek:'Por qué la brisa marina corroe el concreto desde adentro y qué especificar para evitarlo.',
   body:[['p','En la costa Caribe, la mayor amenaza para una estructura de concreto no es el sismo: es la brisa. El aire marino transporta cloruros que penetran el concreto poco a poco hasta alcanzar el acero de refuerzo. Cuando la concentración supera un umbral, la capa que protege al acero se rompe y empieza la corrosión.'],['p','El óxido ocupa varias veces el volumen del acero original. Esa expansión fisura el recubrimiento, el concreto se desprende y el acero queda a la vista. Es el daño que se ve en tantos edificios de más de treinta años cerca del mar.'],['img','fachada-andamio','Reparación de fachada en un edificio antiguo.'],['h','Qué especificar'],['p','La NSR-10 clasifica la exposición a cloruros y, para ella, limita la relación agua-cemento y fija una resistencia mínima del concreto. En la práctica, tres decisiones hacen la diferencia: un concreto de baja permeabilidad, un recubrimiento generoso y un buen curado.'],['p','El recubrimiento es la decisión más barata y la más fácil de perder. Un separador mal puesto le quita en obra los centímetros que se diseñaron. Por eso la supervisión mide recubrimientos antes de cada fundida, no después.']]},
  {id:'arcillas', title:'Arcillas expansivas en el suroccidente de Barranquilla', cat:'Geotecnia', img:'obra-aerea', read:'3 min', dek:'Cimentaciones para suelos que se hinchan en invierno y se contraen en verano.',
   body:[['p','Buena parte del suroccidente de Barranquilla está sobre arcillas que cambian de volumen con la humedad: se expanden en la temporada de lluvias y se contraen en la seca. Una edificación con cimentación superficial sube y baja con ellas.'],['p','El síntoma típico son fisuras diagonales en los muros cerca de las esquinas, puertas que dejan de cerrar y pisos que se levantan. El daño suele atribuirse a la estructura cuando el origen está en el suelo.'],['img','refuerzo-placa','Armado de cimentación en obra.'],['h','Cómo se cimienta'],['p','La solución depende de la profundidad de la capa activa que indique el estudio de suelos. Las opciones más comunes son llevar la cimentación por debajo de esa capa con pilotes o caissons, separar la placa del suelo, o reemplazar el suelo y controlar su humedad bajo la edificación.'],['p','Lo que no funciona es ignorar el estudio de suelos. En estas zonas, la cimentación se decide con el geotecnista desde el inicio del diseño.']]},
  {id:'ley1796', title:'Ley 1796: cuándo es obligatoria la supervisión técnica', cat:'Normativa', img:'ing-medicion', read:'3 min', dek:'Umbrales de área, quién puede supervisar y qué pide la curaduría.',
   body:[['p','La Ley 1796 de 2016, conocida como Ley de Vivienda Segura, se expidió después del colapso del edificio Space en Medellín. Cambió las reglas para diseñar y construir edificaciones en Colombia.'],['h','Qué exige'],['p','Cuando el lote o los lotes de un proyecto permiten construir más de 2.000 m², sin importar el uso, la ley exige dos figuras independientes: la revisión de los diseños estructurales por un profesional distinto al diseñador, como requisito de la licencia, y la supervisión técnica independiente del constructor durante la obra. La revisión también aplica a proyectos más pequeños cuyo diseño deba soportar ampliaciones que superen ese umbral.'],['img','refuerzo-malla','Inspección de refuerzo antes de una fundida.'],['p','Al terminar la obra, el supervisor técnico firma el Certificado Técnico de Ocupación, que se protocoliza y es requisito para ocupar la edificación.'],['h','Quién puede hacerlo'],['p','El revisor debe ser un profesional distinto del diseñador e independiente laboralmente de él; el supervisor, independiente del constructor. Ambos necesitan la experiencia que exige la norma, y la ley creó un registro nacional de profesionales acreditados a cargo del COPNIA. La independencia es el punto central de la ley.']]}
];
const svc = id => SVC.find(s => s.id === id), prj = id => PRJ.find(p => p.id === id);
const pimg = (p, n = '') => (p.ph && p.ph[n.replace(' · ', '') || 'portada']) || `p:${p.name}${n}`;
// An area in m² read as FIFA pitches (105 × 68 m = 7.140 m²)
const pitches = a => { const m = /([\d.]+)\s*m²/.exec(a); if (!m) return ''; const n = +m[1].replace(/\./g, '') / 7140; return n >= .8 ? ` data-eq="≈ ${n < 10 && Math.abs(n - Math.round(n)) > .05 ? n.toFixed(1).replace('.', ',') : Math.round(n)} canchas de fútbol"` : ''; };
const PEND = (title, txt, ar = 'std', shot) => `<div class="ph pending" data-ar="${ar}"><i class="reg" aria-hidden="true"></i><span><b>${title}</b>${txt}</span></div>`;
const TEAM = [['Orlando Barrios Lozano', 'Ingeniero civil, gerente de DDES. Firma los diseños estructurales y dirige las interventorías.', 'T01'], ['Andrea Polo González', 'Ingeniera de proyectos. Coordina la documentación técnica y el control de las obras.', 'T02'], ['Equipo de interventoría', 'Residentes e inspectores que acompañan cada obra: liberan el acero, toman los cilindros y llevan la bitácora.', 'T03']];

/* ---------- Shared blocks ---------- */
const crumbs = list => `<nav class="wrap crumbs" aria-label="Ruta">${list.map(([t, h]) => h ? `<a href="#${h}">${t}</a>` : `<span>${t}</span>`).join('<span aria-hidden="true">/</span>')}</nav>`;
const hero = (k, title, lede, kicker, sm = true, big, back) => `<section class="hero ${sm ? 'sm' : ''} ${big ? 'big' : ''}">${PH(k, 'pano', '', 'fill', 'hi')}<div class="shade"></div><div class="wrap hero-in">${back ? `<a class="back" href="#${back[1]}"><svg aria-hidden="true"><use href="#arl"/></svg><span>${back[0]}</span></a>` : ''}${kicker ? `<p class="kicker rise">${kicker}</p>` : ''}${big ? `<p class="bigword" aria-hidden="true" style="--len:${big.length}">${big}</p>` : ''}<h1 class="rise d1">${title}</h1>${lede ? `<p class="lede rise d2">${lede}</p>` : ''}</div>${credit(k) ? `<p class="credit">${credit(k)}</p>` : ''}</section>`;
const svcCard = (s, ar = 'tall') => `<a class="card" href="#servicio-${s.id}">${PH(s.card, ar, s.name)}<h3>${s.name}</h3><p>${s.short}</p></a>`;
const prjCard = (p, ar = 'std') => `<a class="card" href="#proyecto-${p.id}" data-cat="${p.cat}" data-cursor="Ver obra">${PH(pimg(p), ar, p.name)}<span class="where">${p.loc}</span><h3>${p.name}</h3><p>${p.summary}</p></a>`;
const artCard = a => `<a class="card" href="#articulo-${a.id}" data-cursor="Leer">${PH(a.img, 'std', a.title)}<span class="where">${a.cat} · ${a.read}</span><h3>${a.title}</h3><p>${a.dek}</p></a>`;
const zz = (b, i, extra = '') => `<div class="zz ${i % 2 ? 'rev' : ''}">${FIG(b[2], 'std', b[0], b[3])}<div><h3>${b[0]}</h3><p>${b[1]}</p>${extra}</div></div>`;
const grow = () => `<section class="grow"><div class="mark" aria-hidden="true"><svg viewBox="0 0 2000 603"><use href="#ddes"/></svg></div><div class="wrap"><div class="pic">${PH('ing-casco', 'tall', 'Ingeniero en obra')}<p class="credit" style="color:var(--band-muted)">${credit('ing-casco')}</p></div><div class="txt"><p class="label">Trabaje con nosotros</p><h2>Diseñe en la oficina. Aprenda en la obra.</h2><p>Buscamos ingenieros civiles y estructurales que quieran calcular una estructura y después verla construirse, en proyectos en todo el país.</p><div class="btns"><a class="btn primary" href="#contacto">Enviar hoja de vida</a><a class="btn glass g dk" href="#nosotros"><span class="gl" aria-hidden="true"></span>Cómo trabajamos</a></div></div></div></section>`;
const touch = (k = 'concreto-formaleta') => `<section class="touch">${PH(k, 'pano', '', 'fill')}<div class="tblur"></div><div class="wrap"><div class="tin"><p class="label">Contacto</p><h2>Hablemos de su proyecto</h2><p>Cuéntenos en qué etapa está. Un ingeniero le responde con una propuesta de alcance y honorarios.</p><div class="btns"><a class="btn primary" href="#contacto" data-magnet>Contáctenos</a><a class="btn glass g dk" href="#servicios"><span class="gl" aria-hidden="true"></span>Ver servicios</a></div></div></div><p class="credit">${credit(k)}</p></section>`;
const bg = k => `photo-bg" style="--bg-img:url('/fotos/t/${k}.jpg')`;

const NUT = '<svg class="nutic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2l8.5 4.9v9.8L12 21.8l-8.5-4.9V7.1z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
const MZ = [
  {t: 'Tengo un lote y una idea', d: 'Empiece por el diseño estructural. Si el proyecto es grande, sume la revisión de un ingeniero independiente.', svc: 'diseno', img: 'planos-dibujo', chip: ['NSR', 'Diseño bajo la NSR-10']},
  {t: 'Voy a radicar la licencia', d: 'Si el lote permite construir más de 2.000 m², la curaduría pide el memorial de un revisor independiente del diseñador.', svc: 'revision', ui: [['1', 'Memorial de revisión', 'Firmado por el revisor', 'Ley 1796'], ['2', 'Planos y memoria', 'Con observaciones cerradas', 'Listo']]},
  {t: 'Voy a empezar a construir', d: 'Contrate la supervisión técnica antes de la primera fundida. Sin ella no hay Certificado Técnico de Ocupación.', svc: 'supervision', img: 'refuerzo-malla', chip: ['CTO', 'Obligatoria sobre 2.000 m²']},
  {t: '¿Qué exige la ley?', d: 'Con el área, el uso y los pisos le decimos qué revisión, qué supervisión y qué documentos necesita.', svc: 'supervision', href: 'ley', cta: 'Calcularlo', img: 'ing-medicion', chip: ['Ley', 'Asistente Ley 1796 · NSR-10']},
  {t: 'Mi edificio tiene fisuras', d: 'Una visita inicial dice si hay riesgo inmediato. Los ensayos dicen la causa y cuánto cuesta repararlo.', svc: 'patologia', ui: [['1', 'Inspección y ensayos', 'Núcleos · ferroscan · cloruros', 'Semanas 1–2'], ['2', 'Diagnóstico', 'Causa y reforzamiento', 'Informe']]}
];
const mzCard = m => `<article class="mz-card"><div class="mz-vis">${m.img ? `${PH(m.img, 'sq', m.t)}<div class="mz-chip"><i>${m.chip[0].slice(0, 3)}</i>${m.chip[1]}</div>` : `<div class="mz-ui">${m.ui.map(r => `<div class="mz-row"><span class="ic">${r[0]}</span><span><b>${r[1]}</b><small>${r[2]}</small><span class="tag"><svg viewBox="0 0 14 12" aria-hidden="true"><path pathLength="1" d="M1.5 6.5l3.6 3.6 7.4-8.6"/></svg>${r[3]}</span></span></div>`).join('')}</div>`}</div><h3>${m.t}</h3><p>${m.d}</p><a class="pill" href="#${m.href || 'servicio-' + m.svc}">${m.cta || 'Ver qué necesita'}</a></article>`;
const LEY_USO = [['viv', 'Vivienda', 'I'], ['ofi', 'Oficinas', 'I'], ['ind', 'Bodega', 'I'], ['cc', 'Comercio masivo', 'II'], ['edu', 'Colegio', 'III'], ['sal', 'Clínica', 'IV']];
const LEY_SIG = ["M4 27c5-13 11-21 15-19s-6 21-2 21 10-17 14-17-2 13 2 13 8-10 12-10 4 8 8 8 10-6 15-6M8 32c30-3 66-5 100-7", "M6 23c4-10 14-16 18-12s-8 16-4 16 14-20 20-20-6 20 0 20 16-14 22-14 2 10 8 10 14-8 21-8M22 31c24 2 58-2 86-6", "M8 19c10-8 22-8 20 0s-16 14-12 14 18-16 24-16-4 14 2 14 12-12 18-12 0 10 6 10 9-4 14-6M6 29l104-4", "M6 26c2-12 8-18 12-18s0 18 4 18 8-16 14-16 2 14 8 14 10-12 16-12-4 12 2 12 14-8 22-10M12 32c20-2 50-2 94-4", "M10 21c8-10 18-12 18-4s-12 14-8 14 16-18 22-18-6 18 0 18 10-10 16-10 4 8 10 8 12-6 20-8M16 31c28 0 58-3 88-6"];
const LEY_ROLES = [['dis', 'Diseña', 'Ingeniero estructural', 'Firma los planos y la memoria de cálculo.'], ['rev', 'Revisa', 'Revisor independiente', 'Distinto e independiente de quien diseña.'], ['cur', 'Aprueba', 'Curaduría urbana', 'Expide la licencia de construcción.'], ['sup', 'Supervisa', 'Supervisor técnico independiente', 'Independiente del constructor, desde la primera fundida.'], ['cto', 'Certifica', 'Certificado Técnico de Ocupación', 'Lo firma el supervisor; sin él no se puede ocupar.']];
const ley = () => `<section class="ley" id="ley">
  <div class="ley-band">${PH('obra-aerea', 'pano', '', 'fill')}<div class="lblur"></div>
  <div class="wrap ley-top"><div class="ley-l"><p class="label">Ley 1796 de 2016 · NSR-10</p><h2>¿Qué exige la ley para su proyecto?</h2><p class="ley-lede">Mueva el área, los pisos y el uso. La obra cambia con usted y le mostramos quién tiene que firmarla.</p>
  <form class="ley-form" id="ley-form" novalidate>
    <div class="rg"><label for="ley-area">Área construida total</label><div class="trk"><input class="rng" id="ley-area" type="range" min="0" max="1000" step="5" value="350"><span class="knob" id="knob-a" aria-hidden="true"><output id="ley-area-o" for="ley-area">3.500 m²</output></span></div><div class="ley-scale" aria-hidden="true"><i class="z"></i><span class="t0">0</span><span class="t2">2.000</span><span class="t5">5.000</span><span class="t10">10.000</span><b class="mk"></b></div></div>
    <div class="rg"><label for="ley-pisos">Pisos</label><div class="trk"><input class="rng" id="ley-pisos" type="range" min="1" max="40" step="1" value="8"><span class="knob" id="knob-p" aria-hidden="true"><output id="ley-pisos-o" for="ley-pisos">8 pisos</output></span></div><div class="rg-t" aria-hidden="true"><span>1</span><span>10</span><span>20</span><span>30</span><span>40</span></div></div>
    <fieldset class="ley-uso"><legend>Uso</legend>${LEY_USO.map(([v, t, g], i) => `<label><input type="radio" name="ley-uso" value="${v}"${i ? '' : ' checked'}><span>${t}${g !== 'I' ? `<small title="Grupo ${g} NSR-10">${g}</small>` : ''}</span></label>`).join('')}</fieldset>
    <label class="ley-chk"><input type="checkbox" id="ley-amp"><span>El lote permite ampliar el proyecto a más de 2.000 m²</span></label>
    <div class="ley-par"><b>Parámetros de diseño</b><span id="ley-read"></span><span id="ley-leg"></span></div><p class="ley-note">Orientación general. El diseñador y la curaduría confirman cada caso.</p></form></div>
  <div class="portal" id="portal"><div class="iso" id="iso"><div class="blob" id="blob" aria-hidden="true"></div><p class="iso-verdict ley-v" id="ley-v" aria-live="polite"></p><div class="iso-stage" id="iso-stage"><svg class="iso-l iso-bgl" viewBox="0 0 1000 760" aria-hidden="true"><g id="iso-cam0"><g id="iso-g"><g id="iso-gs"></g><g id="iso-gc"></g></g></g></svg><svg class="iso-l iso-skyl" viewBox="0 0 1000 760" aria-hidden="true"><defs><linearGradient id="iso-hz" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="100" y2="400"><stop offset="0" stop-color="#2b82d4"/><stop offset=".3" stop-color="#6fb5ea"/><stop offset=".56" stop-color="#bfe0f3" stop-opacity=".96"/><stop offset=".8" stop-color="#f4e4c6" stop-opacity=".5"/><stop offset="1" stop-color="#f4e4c6" stop-opacity="0"/></linearGradient><radialGradient id="iso-sunh" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fffbe9"/><stop offset=".22" stop-color="#fff1c2" stop-opacity=".75"/><stop offset=".55" stop-color="#ffe3a0" stop-opacity=".22"/><stop offset="1" stop-color="#ffe3a0" stop-opacity="0"/></radialGradient><g id="iso-cloud"><g fill="#c9dcee"><circle cx="2" cy="2.8" r="3.4"/><circle cx="7" cy=".8" r="4.6"/><circle cx="12.6" cy="1.8" r="3.8"/><circle cx="16.4" cy="3.4" r="2.6"/><rect x="-1.4" y="2.8" width="20.4" height="3.4" rx="1.7"/></g><g fill="#fff"><circle cx="2" cy="1.7" r="3.1"/><circle cx="7" cy="-.3" r="4.3"/><circle cx="12.6" cy=".7" r="3.5"/><circle cx="16.4" cy="2.4" r="2.2"/><rect x="-1.1" y="1.7" width="19.7" height="2.9" rx="1.45"/></g><g fill="#fff" opacity=".9"><circle cx="5.6" cy="-1.4" r="1.6"/></g></g></defs><rect x="-600" y="-600" width="2200" height="1960" fill="url(#iso-hz)"/><g id="iso-sky" aria-hidden="true"><circle class="sunh" cx="75" cy="5" r="15" fill="url(#iso-sunh)"/><circle cx="75" cy="5" r="5.2" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width=".3"/><circle cx="75" cy="5" r="3.1" fill="#fffaea"/><g class="cl cl1"><use href="#iso-cloud" transform="translate(12 3) scale(1.05)"/></g><g class="cl cl2"><use href="#iso-cloud" transform="translate(44 9) scale(.66)" opacity=".95"/></g><g class="cl cl3"><use href="#iso-cloud" transform="translate(86 -1) scale(.48)" opacity=".85"/></g><g class="flock f1"><g fill="none" stroke="#22374b" stroke-width=".3" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(0 0)"><path class="w" style="animation-delay:0s" d="M-1.3 0Q-.65 -.95 0 0Q.65 -.95 1.3 0"/></g><g transform="translate(3.1 1.5) scale(.8)"><path class="w" style="animation-delay:-0.21s" d="M-1.3 0Q-.65 -.95 0 0Q.65 -.95 1.3 0"/></g><g transform="translate(-2.7 2.1) scale(.72)"><path class="w" style="animation-delay:-0.4s" d="M-1.3 0Q-.65 -.95 0 0Q.65 -.95 1.3 0"/></g></g></g><g class="flock f2"><g fill="none" stroke="#22374b" stroke-width=".3" stroke-linecap="round" stroke-linejoin="round"><g transform="scale(-.85 .85)"><path class="w" style="animation-delay:-0.1s" d="M-1.3 0Q-.65 -.95 0 0Q.65 -.95 1.3 0"/></g><g transform="translate(2.6 1.3) scale(-.7 .7)"><path class="w" style="animation-delay:-0.33s" d="M-1.3 0Q-.65 -.95 0 0Q.65 -.95 1.3 0"/></g></g></g></g></svg><svg id="iso-svg" viewBox="0 0 1000 760" role="img" aria-label="Modelo isométrico de la obra con los pisos, el umbral de 2.000 m², la grúa y la valla de licencia"><defs><filter id="iso-sh" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3.2"/></filter><filter id="iso-ao" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.2"/></filter><radialGradient id="iso-gmf" cx=".5" cy=".5" r=".5"><stop offset=".42" stop-color="#fff"/><stop offset=".8" stop-color="#fff" stop-opacity=".25"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><mask id="iso-gm" maskContentUnits="objectBoundingBox"><rect width="1" height="1" fill="url(#iso-gmf)"/></mask></defs><g id="iso-cam"><g id="iso-w"></g><polygon id="iso-hl" points=""/><g id="iso-hit" class="iso-hit"></g></g></svg><svg class="iso-l iso-hkl" viewBox="0 0 1000 760" aria-hidden="true"><g id="iso-cam2"></g></svg></div><svg class="iso-over" viewBox="0 0 1000 760" aria-hidden="true"><g id="iso-lead"></g></svg>
    <div class="iso-cards"><div class="ic" data-a="umbral"><span>Ley 1796</span><b id="ic-umbral"></b><div class="bar" aria-hidden="true"><i></i><u></u></div><small id="ic-area"></small></div><div class="ic" data-a="firmas"><span>Firmas en el expediente</span><b id="ic-firmas"></b><div class="pips" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div></div></div>
    <ol class="iso-hitos"><li class="done" data-h="h1"><i></i><b>Hito 1 · Licencia</b><small id="h1s"></small></li><li class="now" data-h="h2"><i></i><b>Hito 2 · Estructura</b><small id="h2s"></small></li><li data-h="h3"><i></i><b>Hito 3 · Ocupación</b><small id="h3s"></small></li></ol></div></div></div>
  <p class="credit">${credit('obra-aerea')}</p></div>
  <div class="wrap"><div class="ley-bot"><div class="ley-out" id="ley-out" aria-live="polite"><h3 class="ley-h">Por qué</h3><p id="ley-vs"></p>
    <div class="ley-docs"><h3>Lo que le va a pedir la curaduría <span id="ley-dn"></span></h3><ol id="ley-docs"></ol><button type="button" class="btn primary nut" id="ley-go">${NUT}<span>Pedir propuesta con estos datos</span></button></div></div>
    <div class="ley-sign"><h3>Quién firma su proyecto <span id="ley-n"></span></h3>${LEY_ROLES.map(([k, r, w, d], i) => `<div class="sg" data-k="${k}"><b>${r}</b><span class="who">${w}${k === 'rev' || k === 'sup' || k === 'cto' ? '<span class="lw">Ley 1796</span>' : ''}<small>${d}</small></span><svg viewBox="0 0 124 38" aria-hidden="true"><path class="base" d="M0 34.5h124"/><path class="ink" pathLength="1" d="${LEY_SIG[i]}"/><text class="no" x="124" y="28"></text></svg></div>`).join('')}</div></div></div></section>`;

const manifesto = () => `<section class="mani" id="mani"><div class="wrap">
  <h2 class="mani-h"><span class="vh">Diseñadas para resistir el sismo, el viento, el salitre y el tiempo.</span><span aria-hidden="true">Diseñadas para resistir el <span class="rot" data-words="sismo.|viento.|salitre.|tiempo."><span class="rot-w in">sismo.</span></span></span></h2>
  <p class="fill-text on-dark">Un edificio se levanta en meses. Que dure cincuenta años frente al mar depende de lo que se calculó antes y de lo que se revisó en obra.</p></div>
  <button class="reel" id="reel-open" type="button" data-cursor="Ver"><span class="reel-img">${PH('hero-gruas', 'std', '', '', true)}</span><span><b>Recorrido fotográfico</b><small>${Object.keys(CR).length} fotografías · ${Math.floor(Object.keys(CR).length * 4 / 60)}:${String(Object.keys(CR).length * 4 % 60).padStart(2, '0')}</small></span></button></section>`;
const datos = () => `<section class="datos" id="datos"><div class="dt-pin"><div class="dt-cols" aria-hidden="true"></div>
  <div class="dt-mark" aria-hidden="true"><svg id="obra-svg" viewBox="-40 -30 2080 690" preserveAspectRatio="xMidYMid meet"></svg></div>
  <div class="dt-center"><p class="label dt-k">Diseño de Estructuras y Soluciones S.A.S.</p><p class="dt-text">DDES es una firma de ingeniería estructural de Barranquilla.</p>
  <div class="dt-stats"><div data-eq="Diseño de Estructuras y Soluciones S.A.S."><b class="yr">2020</b><span>fundada</span></div><div data-eq="en el archivo de diseño, año por año"><b>70+</b><span>proyectos</span></div><div data-eq="Solemio · Cannon · Centurión · Ébano · Galé · Casa Grande · Galapa"><b>7</b><span>interventorías</span></div><div data-eq="Atlántico · Bolívar · Córdoba · Sucre · La Guajira · Casanare"><b>6</b><span>departamentos</span></div></div><p class="dt-sub">Trabajamos en todo el país con un equipo que conoce los suelos, el clima y la forma de construir de cada región.</p><a class="btn" href="#nosotros">Quiénes somos</a><ul class="dt-logos" aria-label="Clientes">${CLI.map(([n, f, h]) => `<li><img src="/clientes/color/${f}" alt="${n}" style="height:${Math.round(h * .8)}px" loading="lazy" decoding="async"></li>`).join('')}</ul></div><p class="dt-note">Han confiado su estructura en nosotros</p></div></section>`;
// Clients, as DDES lists them, by their own logos in their own colours (background removed: deploy/logos.mjs color). They drift
// in the two columns beside "DDES es una firma…", at a height that gives each the same visual weight. [name, file, height px]
const CLI = [['Coca-Cola', 'cocacola.png', 31], ['Jamar', 'jamar.png', 24], ['Universidad de Córdoba', 'unicordoba.png', 30], ['Cannon', 'cannon.png', 44],
  ['Centurión', 'centurion.png', 55], ['Spatium Ingeniería', 'spatium.png', 58], ['H3 Arquitectura', 'h3.png', 48], ['AF Gym', 'afgym.png', 42],
  ['Grupo Avintia', 'avintia.png', 34], ["Al'fresco", 'alfresco.png', 47], ['Grama Construcciones', 'grama.png', 55]];
const clients = () => `<section class="sec clients" aria-labelledby="cl-h"><div class="wrap"><p class="label" id="cl-h">Han confiado su estructura en nosotros</p>
  <ul class="cl-names">${CLI.map(([n, f, ht]) => `<li class="lg"><img src="/clientes/${f}" alt="${n}" style="height:${ht}px" loading="lazy" decoding="async"></li>`).join('')}</ul></div></section>`;
const obraSec = () => `<section class="obra" id="obra"><div class="obra-pin">
  <div class="wrap obra-copy"><p class="label">Principio de trabajo</p><p class="fill-text on-dark obra-q">“Un plano es una promesa. Nuestro trabajo es que esa promesa se cumpla en cada columna, aunque nadie la vuelva a ver después de fundida.”</p></div>
  <div class="obra-fig" aria-hidden="true"><div class="wrap"><svg id="obra-svg" viewBox="-40 -30 2080 690" preserveAspectRatio="xMinYMax meet"></svg></div></div></div></section>`;

/* ---------- Pages ---------- */
const PAGES = {
  home() {
    const feat = ['arte57', 'ebano', 'solemio', 'cannon'].map(prj), f0 = feat[0];
    return `
    <section class="hhero hh-scene"><div class="hh-pin">
      <div class="hh-half">${PH('hero-gruas', 'pano', 'Grúas torre al atardecer', 'fill', 'hi')}<div class="hh-dof"></div><div class="hshade"></div><canvas class="hh-beam" aria-hidden="true"></canvas>
        <div class="wrap hh-in"><p class="hello" aria-hidden="true" style="--len:12">Estructuras.</p>
          <h1 class="hsub"><span id="hh-line">Calculamos lo que sostiene la ciudad.</span> <a href="#contacto">¿Hablamos de su proyecto?</a></h1></div>
        <p class="credit">${credit('hero-gruas')}</p></div></div></section>

    ${manifesto()}

    ${datos()}


    <section class="sec" style="padding-bottom:clamp(72px,9vw,128px)"><div class="wrap"><div class="sec-h"><div><p class="label">Por dónde empezar</p><h2>¿En qué etapa está su proyecto?</h2></div>${LINK('#ley', '¿Qué exige la ley? Calcúlelo')}</div></div><div class="mz-wrap" id="mzw" data-drag="Arrastre"><div class="mz" id="mz">${MZ.map(mzCard).join('')}</div></div></section>

    <section class="hs" id="hs"><div class="hs-pin" data-drag="Desplace"><div class="wrap hs-head"><div><p class="label">Servicios</p><h2>Lo que hacemos</h2></div><p>Diseñamos, revisamos diseños de otras firmas y supervisamos la obra.</p></div>
      <div class="hs-track">${SVC.map(s => `<a class="hs-card" href="#servicio-${s.id}" data-cursor="Ver">${PH(s.hero, 'tall', s.name)}<h3>${s.name}</h3><p>${s.short}</p></a>`).join('')}<a class="hs-card hs-end" href="#servicios" data-cursor="Ver"><h3>Todos los servicios</h3><span class="link">Ir a servicios ${ARR}</span></a></div>
      <div class="wrap"><div class="hs-bar"><i></i></div></div></div></section>



    <template id="node-hidden"><!-- Despiece del nodo: oculto por ahora, se reactiva moviendo esta sección fuera del template -->
    <section class="band sec"><div class="wrap node"><div><p class="label">Diseño estructural</p><h2>Cada conexión, pieza por pieza.</h2><p class="muted" style="max-width:44ch">Conexión viga–columna a momento con placa de extremo apernada. Pase el cursor sobre el nodo para verlo desarmado.</p>
      <ul class="parts" id="parts"><li data-part="col">Columna<span>HEB 300</span></li><li data-part="stf">Rigidizadores<span>Placas de 15 mm</span></li><li data-part="plate">Placa de extremo<span>25 mm · A572 Gr. 50</span></li><li data-part="bolts">Pernos<span>8 × A325 Ø 22 mm</span></li><li data-part="beam">Viga<span>IPE 400</span></li></ul>
      <button type="button" class="btn light" id="node-toggle" aria-pressed="false">Ver despiece</button></div>
      <figure class="node-fig"><svg id="node" role="img" aria-label="Conexión viga–columna con placa de extremo y ocho pernos, que se separa en sus piezas"></svg><figcaption><span>Pase el cursor o toque el nodo.</span><span>Dibujo isométrico, sin escala</span></figcaption></figure></div></section></template>

    <section class="sec xp" aria-labelledby="xp-h"><div class="wrap">
      <div class="sec-h"><div><p class="label">Experiencia</p><h2 id="xp-h">Proyectos destacados</h2></div><p>Torres de vivienda, bodegas y plantas industriales: diseño, revisión e interventoría en todo el país.</p></div>
      <div class="xp-g"><div class="feature"><div>${PH(pimg(f0), 'wide', f0.name)}<div class="fcap"><div><p class="where" style="font-size:14px;color:var(--muted);font-weight:500" id="feat-loc">${f0.loc}</p><h3><a href="#proyecto-${f0.id}" id="feat-name" style="text-decoration:none">${f0.name}</a></h3></div><div class="ctrl"><span class="count" id="feat-n">1 / ${feat.length}</span><button type="button" id="feat-prev" aria-label="Proyecto anterior"><svg><use href="#arl"/></svg></button><button type="button" id="feat-next" aria-label="Proyecto siguiente"><svg><use href="#arr"/></svg></button></div></div></div></div>
        <aside class="xp-s" aria-label="Sectores"><p class="label">Sectores</p><ul>${[['edificios', 'Edificaciones', 'baq-torres'], ['industrial', 'Industrial', 'acero-nave'], ['infraestructura', 'Infraestructura', 'puente-obra'], ['comercial', 'Comercial', 'concreto-columnas'], ['institucional', 'Institucional', 'refuerzo-columnas']].map(([k, n, im]) => `<li><a href="#experiencia-${k}">${PH(im, 'sq', n)}<span>${n}</span><small>${TRAY.reduce((c, [, l]) => c + l.filter(x => x[1] === k).length, 0)}</small><svg aria-hidden="true"><use href="#arr"/></svg></a></li>`).join('')}</ul>
          <a class="btn" href="#experiencia">Ver todos los proyectos</a></aside></div></div></section>




    ${grow()}${touch('refuerzo-malla')}`;
  },
  services() {
    return `${hero('acero-cercha', 'Diseño, revisión, supervisión y reforzamiento de estructuras bajo la NSR-10.', '', '', false, 'Servicios.')}
    ${crumbs([['Inicio', 'inicio'], ['Servicios']])}
    <div class="wrap intro"><p>Acompañamos la estructura en todas sus etapas: la diseñamos, revisamos diseños de otras firmas y supervisamos su construcción. Cuando diseñamos un proyecto, la revisión independiente la hace otra firma, como exige la ley.</p><dl><div><dt>Norma</dt><dd>NSR-10</dd></div><div><dt>Marco legal</dt><dd>Ley 1796 de 2016</dd></div><div><dt>Cobertura</dt><dd>Nacional</dd></div></dl></div>
    <section class="sec tight"><div class="wrap grid2">${SVC.map(s => `<a class="card" href="#servicio-${s.id}">${PH(s.hero, 'wide', s.name)}<h3 style="font-size:26px">${s.name}</h3><p>${s.short}</p></a>`).join('')}</div></section>
    ${ley()}
    <section class="sec tight"><div class="wrap"><div class="sec-h"><div><h2>Cómo trabajamos</h2><p>Cada servicio sigue un proceso escrito, con entregables claros y fechas acordadas.</p></div></div>
      <div class="grid3">${[['Un solo equipo', 'Los ingenieros que diseñan también visitan la obra. La estructura no termina en el plano.', 'refuerzo-malla'], ['Todo documentado', 'Memorias, actas y bitácoras que respaldan cada decisión ante el propietario y la curaduría.', 'planos-lapiz'], ['En todo el país', 'Conocemos los suelos, el clima y los constructores de cada región.', 'baq-skyline']].map(([t, d, im]) => `<div class="card">${PH(im, 'std', t)}<h3>${t}</h3><p>${d}</p></div>`).join('')}</div></div></section>
    ${touch()}`;
  },
  service(id) {
    const s = svc(id); if (!s) return PAGES.services();
    // the pathology page opens on the beam that fails: the failure is what this service studies
    const top = id === 'patologia' ? `<section class="hhero hh-scene" data-mode="break"><div class="hh-pin">
      <div class="hh-half">${PH(s.hero, 'pano', s.name, 'fill', 'hi')}<div class="hh-dof"></div><div class="hshade"></div><canvas class="hh-beam" aria-hidden="true"></canvas>
        <div class="wrap hh-in"><p class="hello" aria-hidden="true" style="--len:8">Fisuras.</p>
          <h1 class="hsub"><span class="vh">${s.name}. </span><span>${s.tagline}</span> <a href="#contacto">¿Revisamos su estructura?</a></h1></div>
        ${credit(s.hero) ? `<p class="credit">${credit(s.hero)}</p>` : ''}</div></div></section>` : hero(s.hero, s.name, s.tagline, '', true, null, ['Servicios', 'servicios']);
    return `${top}
    ${crumbs([['Inicio', 'inicio'], ['Servicios', 'servicios'], [s.name]])}
    <div class="wrap intro"><p>${s.intro}</p><dl><div><dt>Norma</dt><dd>NSR-10</dd></div><div><dt>Entregables</dt><dd>${s.deliver.length}</dd></div><div><dt>Cobertura</dt><dd>Nacional</dd></div></dl></div>
    <nav class="subnav" aria-label="Secciones"><div class="wrap"><div class="sn-links"><button data-go="alcance" class="on">Alcance</button><button data-go="proceso">Proceso</button><button data-go="entregables">Entregables</button><button data-go="preguntas">Preguntas</button><button data-go="proyectos">Proyectos</button></div><div class="sn-cta"><a href="#contacto">Pedir propuesta</a></div></div></nav>
    <section class="sec" id="alcance"><div class="wrap">${s.blocks.map((b, i) => zz(b, i)).join('')}</div></section>
    <section class="sec tight" id="proceso"><div class="wrap"><div class="sec-h"><h2>Proceso</h2></div><ol class="steps">${s.steps.map(([t, d]) => `<li><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol></div></section>
    <section class="band sec ${bg(s.hero)}" id="entregables"><div class="wrap deliv"><div><h2>Entregables</h2><ul class="list">${s.deliver.map(d => `<li>${d}</li>`).join('')}</ul></div>
      ${s.checks ? `<div class="checks"><h2>Lo que verificamos en obra</h2>${s.checks.map(([a, b]) => `<div class="row"><span>${a}</span><b>${b}</b></div>`).join('')}<p class="law"><b>Obligatoria por ley.</b> La Ley 1796 de 2016 exige supervisión técnica independiente del constructor cuando el lote permite construir más de 2.000 m².</p></div>` : `<div>${PH(s.card, 'std', s.name)}<p class="credit" style="color:var(--band-muted)">${credit(s.card)}</p></div>`}</div></section>
    ${['supervision', 'revision'].includes(s.id) ? ley() : ''}
    <section class="sec" id="preguntas"><div class="wrap"><div class="faqwrap"><div><div class="sec-h"><h2>Preguntas frecuentes</h2></div><div class="faq">${s.faq.map(([q, a], i) => `<details ${i ? '' : 'open'}><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div>${FIG(s.card, 'tall', s.name, '')}</div></div></section>
    <section class="sec tight" id="proyectos"><div class="wrap"><div class="sec-h"><h2>Proyectos</h2>${LINK('#experiencia', 'Toda la experiencia')}</div><div class="grid3">${s.projects.map(id => prjCard(prj(id))).join('')}</div></div></section>
    <section class="sec tight"><div class="wrap"><div class="sec-h"><h2>Servicios relacionados</h2></div><div class="grid3">${s.related.map(id => svcCard(svc(id), 'std')).join('')}</div></div></section>
    ${touch(s.hero === 'concreto-formaleta' ? 'refuerzo-malla' : 'concreto-formaleta')}`;
  },
  work(cat) {
    return `${hero('baq-skyline', 'Estructuras diseñadas, revisadas y supervisadas en todo el país.', '', '', false, 'Obras.')}
    ${crumbs([['Inicio', 'inicio'], ['Experiencia']])}
    <div class="wrap intro"><p>Edificios, bodegas y plantas industriales en Colombia. Cada ficha cuenta qué hicimos en la obra, con los documentos que lo respaldan.</p><dl><div><dt>Fundada en</dt><dd>2020</dd></div><div><dt>Proyectos en el archivo</dt><dd>${TRAY.reduce((n, [, l]) => n + l.length, 0)}+</dd></div><div><dt>Proyectos en detalle</dt><dd>${PRJ.length}</dd></div></dl></div>
    <section class="sec tight"><div class="wrap"><div class="filters" role="group" aria-label="Filtrar por sector"><button type="button" data-f="all" aria-pressed="${!cat}">Todos</button>${Object.entries(CATS).filter(([k]) => PRJ.some(p => p.cat === k) || TRAY.some(([, l]) => l.some(x => x[1] === k))).map(([k, n]) => `<button type="button" data-f="${k}" aria-pressed="${cat === k}">${n}</button>`).join('')}</div>
      <div class="grid3" id="work-grid">${PRJ.map(p => prjCard(p)).join('')}</div><p class="work-empty" id="work-empty" hidden>En este sector todavía no publicamos fichas de obra. Abajo, en el archivo, están los proyectos que hemos diseñado.</p></div></section>
    <section class="sec tight tray" id="archivo"><div class="wrap"><div class="sec-h"><div><p class="label">Archivo de diseño</p><h2>Veinte años de cálculos.</h2><p>Cada año, los proyectos que diseñamos o revisamos, tal como están en nuestro archivo.</p></div></div>
      <ol class="tray-list">${TRAY.map(([y, l]) => `<li><span class="tray-y">${y}</span><ul>${l.map(([n, c]) => `<li data-cat="${c}">${n}</li>`).join('')}</ul></li>`).join('')}</ol></div></section>
    ${touch('baq-torres')}`;
  },
  project(id) {
    const p = prj(id); if (!p) return PAGES.work();
    const others = PRJ.filter(x => x.id !== p.id && (x.cat === p.cat || x.svc.some(s => p.svc.includes(s)))).slice(0, 3);
    return `${hero(pimg(p, ' · portada'), p.name, p.summary, p.loc, true, null, ['Experiencia', 'experiencia'])}
    ${crumbs([['Inicio', 'inicio'], ['Experiencia', 'experiencia'], [p.name]])}
    <div class="wrap pgrid"><dl class="facts">${[['Ubicación', p.city], ['Sector', CATS[p.cat]], ['Área o escala', p.area], ['Altura', p.size], ['Sistema estructural', p.system], ['Años', p.year]].filter(r => r[1]).map(([t, v]) => `<div><dt>${t}</dt><dd${t === 'Área o escala' ? pitches(v) : ''}>${v}</dd></div>`).join('')}<div><dt>Servicios</dt><dd>${p.svc.map(s => `<a href="#servicio-${s}">${svc(s).name}</a>`).join('<br>')}</dd></div></dl>
      <div class="story"><p class="lead">${p.summary}</p>${p.challenge ? `<h2>El reto</h2><p>${p.challenge}</p>` : `<h2>Lo que hicimos</h2><ol class="scope">${p.scope.map(x => `<li>${x}</li>`).join('')}</ol>`}<div class="gal">${PH(pimg(p, ' · vista general'), 'wide')}${PH(pimg(p, ' · detalle de obra'), 'std')}${PH(pimg(p, ' · estructura'), 'std')}</div>${p.solution ? `<h2>La solución</h2><p>${p.solution}</p>` : ''}</div></div>
    <section class="sec" style="border-top:1px solid var(--line)"><div class="wrap"><div class="sec-h"><h2>Proyectos relacionados</h2><a class="btn" href="#experiencia">Toda la experiencia</a></div><div class="grid3">${others.map(o => prjCard(o)).join('')}</div></div></section>
    ${touch()}`;
  },
  about() {
    return `${hero('baq-atardecer', 'Ingeniería estructural desde Barranquilla, para todo el país.', '', '', false, 'Nosotros.')}
    ${crumbs([['Inicio', 'inicio'], ['Nosotros']])}
    <div class="wrap intro"><p>DDES es una firma de ingeniería estructural con sede en Barranquilla. Nuestro equipo conoce los suelos, el clima y la forma de construir de cada región del país, y acompaña cada estructura desde el diseño hasta la entrega.</p><dl><div><dt>Sede</dt><dd>Barranquilla</dd></div><div><dt>Cobertura</dt><dd>Nacional</dd></div><div><dt>Norma</dt><dd>NSR-10</dd></div></dl></div>
    <section class="sec tight"><div class="wrap"><div class="sec-h"><h2>Lo que nos define</h2></div><div class="grid3">${[['Rigor técnico', 'Cada decisión está calculada y documentada. Si no se puede sustentar, no se firma.', 'planos-lapiz'], ['Presencia en obra', 'Los ingenieros que diseñan también visitan la obra. La estructura no termina en el plano.', 'ing-medicion'], ['Claridad', 'Explicamos en lenguaje sencillo qué se decide y por qué, al propietario, al constructor y a la curaduría.', 'ing-planos']].map(([t, d, im]) => `<div class="card">${PH(im, 'tall', t)}<h3>${t}</h3><p>${d}</p></div>`).join('')}</div></div></section>
    <section class="sec tight"><div class="wrap"><div class="sec-h"><div><p class="label">Quién firma</p><h2>Cada plano lleva el nombre de un ingeniero.</h2><p>Diseño, revisión y supervisión los firman profesionales con matrícula y experiencia acreditada. Ellos responden por nuestro trabajo.</p></div></div>
      <div class="grid3 team">${TEAM.map(([n, d, sh]) => `<div class="card">${PEND('Retrato', n, 'tall', sh)}<h3>${n}</h3><p>${d}</p></div>`).join('')}</div></div></section>
    <section class="sec tight"><div class="wrap">
      ${zz(['Conocemos cada región', 'Nacimos en Barranquilla y trabajamos en todo el país: Atlántico, Bolívar, Córdoba, Sucre, La Guajira, Casanare. Suelos blandos cerca de los ríos, arcillas expansivas, zonas de amenaza sísmica alta, brisa marina y aguaceros intensos: diseñamos para las condiciones reales de cada lugar.', 'baq-skyline', 'Barranquilla.'], 0)}
      ${zz(['Herramientas y normas', 'Diseñamos bajo la NSR-10, ACI 318 y AISC 360. Analizamos en ETABS, SAP2000 y SAFE, y modelamos en Revit y Tekla.', 'planos-azul', 'Planos de una edificación.'], 1, `<div class="chips" style="margin-top:20px">${['NSR-10', 'Ley 1796', 'ACI 318', 'AISC 360', 'ETABS', 'SAP2000', 'SAFE', 'Revit', 'Tekla'].map(c => `<span>${c}</span>`).join('')}</div>`)}</div></section>
    <section class="band lite statband sec"><div class="wrap"><div><p class="big">“Un plano es una promesa. Nuestro trabajo es que esa promesa se cumpla en cada columna, aunque nadie la vuelva a ver después de fundida.”</p><div class="pic">${FIG('baq-torres', 'wide', 'Torres en Barranquilla', 'Norte de Barranquilla.')}</div></div><div><div class="stats"><div class="stat"><b>2020</b><span>año de fundación</span></div><div class="stat"><b>70+</b><span>proyectos en el archivo</span></div><div class="stat"><b>7</b><span>interventorías</span></div><div class="stat"><b>6</b><span>departamentos</span></div></div></div></div></section>
    ${grow()}${touch()}`;
  },
  insights() {
    const [a0, ...rest] = ART;
    return `${hero('refuerzo-contrapicado', 'Lo que aprendemos en obra, explicado en corto.', '', '', false, 'Notas.')}
    ${crumbs([['Inicio', 'inicio'], ['Perspectivas']])}
    <section class="sec" style="padding-top:24px"><div class="wrap feature"><a href="#articulo-${a0.id}" class="card">${PH(a0.img, 'wide', a0.title)}</a><div><p class="label">${a0.cat} · ${a0.read}</p><h2>${a0.title}</h2><p class="muted" style="margin-bottom:24px">${a0.dek}</p>${LINK('#articulo-' + a0.id, 'Leer la nota')}</div></div></section>
    <section class="sec tight"><div class="wrap grid2">${rest.map(artCard).join('')}</div></section>
    ${touch()}`;
  },
  article(id) {
    const a = ART.find(x => x.id === id); if (!a) return PAGES.insights();
    return `${hero(a.img, a.title, a.dek, a.cat, true, null, ['Perspectivas', 'perspectivas'])}
    ${crumbs([['Inicio', 'inicio'], ['Perspectivas', 'perspectivas'], [a.cat]])}
    <article class="wrap"><div class="article"><p class="meta">${a.cat} · Lectura de ${a.read} · Equipo técnico DDES</p>${a.body.map(b => b[0] === 'p' ? `<p>${b[1]}</p>` : b[0] === 'h' ? `<h2>${b[1]}</h2>` : FIG(b[1], 'wide', b[2], b[2])).join('')}</div></article>
    <section class="sec" style="border-top:1px solid var(--line)"><div class="wrap"><div class="sec-h"><h2>Más notas</h2></div><div class="grid2">${ART.filter(x => x.id !== id).map(artCard).join('')}</div></div></section>
    ${touch()}`;
  },
  contact() {
    return `${crumbs([['Inicio', 'inicio'], ['Contacto']])}
    <div class="wrap cgrid"><div><h1>Hablemos de su proyecto</h1><p class="muted" style="font-size:19px;max-width:40ch">Cuéntenos qué necesita. Un ingeniero, no un vendedor, le responde con una propuesta de alcance y honorarios.</p>
      <dl class="office"><div><dt>Oficina</dt><dd>Barranquilla, Atlántico</dd></div><div><dt>Correo</dt><dd><a href="mailto:gerencia@ddes.co">gerencia@ddes.co</a></dd></div><div><dt>Teléfono</dt><dd><a href="tel:+573002021920">+57 300 202 1920</a></dd></div><div><dt>WhatsApp</dt><dd><a href="https://wa.me/573002021920" target="_blank" rel="noopener">+57 300 202 1920</a></dd></div><div><dt>Horario</dt><dd>Lunes a viernes, 7:30 a. m. a 5:30 p. m.</dd></div></dl>
      <div style="margin-top:32px">${PH('baq-ventana', 'wide', 'Ventana al Mundo, Barranquilla')}<p class="credit">${credit('baq-ventana')}</p></div></div>
      <form id="cform" novalidate>
        <div class="field"><label for="f-name">Nombre</label><input id="f-name" required autocomplete="name"></div>
        <div class="field"><label for="f-co">Empresa</label><input id="f-co" autocomplete="organization"></div>
        <div class="field"><label for="f-mail">Correo</label><input id="f-mail" type="email" required autocomplete="email"></div>
        <div class="field"><label for="f-tel">Teléfono</label><input id="f-tel" type="tel" autocomplete="tel"></div>
        <div class="field full"><label for="f-stage">¿En qué etapa está?</label><select id="f-stage"><option>Tengo un lote y una idea</option><option>Voy a radicar la licencia</option><option>Voy a empezar a construir</option><option>La obra ya está en marcha</option><option>Es un edificio existente</option></select></div>
        <div class="field full"><span class="lbl">¿Qué necesita?</span><div class="pick">${SVC.map((s, i) => `<label><input type="checkbox" id="c-${s.id}" ${i === 0 ? 'checked' : ''}><span>${s.name}</span></label>`).join('')}</div></div>
        <div class="field"><label for="f-city">Ciudad del proyecto</label><input id="f-city" placeholder="Barranquilla"></div>
        <div class="field"><label for="f-area">Área construida</label><select id="f-area"><option>Hasta 2.000 m²</option><option>De 2.000 a 10.000 m²</option><option>Más de 10.000 m²</option><option>No lo sé todavía</option></select><p class="hint" id="f-area-hint" aria-live="polite"></p></div>
        <div class="field full"><label for="f-msg">Cuéntenos del proyecto</label><textarea id="f-msg" placeholder="Ubicación, número de pisos, etapa en la que está, fecha estimada de inicio…"></textarea></div>
        <label class="consent"><input type="checkbox" id="f-ok"><span>Autorizo a DDES a tratar mis datos para responder esta solicitud, según la <a href="#privacidad">política de tratamiento de datos</a> (Ley 1581 de 2012).</span></label>
        <input type="text" name="_honey" class="vh" tabindex="-1" autocomplete="off" aria-hidden="true"><div class="btns" style="justify-self:start;align-items:center"><button class="btn primary nut" type="submit" data-via="web">${NUT}<span>Enviar solicitud</span></button><button class="btn" type="submit" data-via="correo">Enviar desde mi correo</button></div><p class="form-alt">¿Prefiere hablar? <a href="https://wa.me/573002021920" target="_blank" rel="noopener">Escríbanos por WhatsApp</a>.</p><p class="form-msg" id="fmsg" role="status"></p>
      </form></div>`;
  },
  privacy() {
    return `${crumbs([['Inicio', 'inicio'], ['Tratamiento de datos']])}
    <article class="wrap"><div class="article"><h1 class="doc-h">Política de tratamiento de datos personales</h1><p class="meta">Borrador para revisión legal · Ley 1581 de 2012 y Decreto 1377 de 2013</p>
      <h2>Responsable</h2><p>Diseño de Estructuras y Soluciones S.A.S. (DDES), con domicilio en Barranquilla, Atlántico. Correo: gerencia@ddes.co.</p>
      <h2>Qué datos tratamos y para qué</h2><p>Nombre, empresa, correo, teléfono y la información del proyecto que usted nos envía. Los usamos para responder su solicitud, preparar propuestas, ejecutar los contratos que firmemos y, si nos envía su hoja de vida, para procesos de selección. No vendemos ni cedemos sus datos a terceros. Los mensajes del formulario de contacto llegan a nuestro correo a través de FormSubmit (formsubmit.co), un servicio que solo los entrega.</p>
      <h2>Sus derechos</h2><p>Como titular puede conocer, actualizar y rectificar sus datos, pedir prueba de la autorización, saber cómo los hemos usado, revocar la autorización o pedir que los eliminemos cuando no exista un deber legal de conservarlos, y presentar quejas ante la Superintendencia de Industria y Comercio.</p>
      <h2>Cómo ejercerlos</h2><p>Escríbanos a gerencia@ddes.co con el asunto «Datos personales». Respondemos consultas en máximo diez días hábiles y reclamos en máximo quince, como establece la ley.</p>
      <h2>Vigencia</h2><p>Esta política rige desde su publicación. Conservamos los datos mientras dure la relación y durante el tiempo que exijan las obligaciones legales y contractuales.</p></div></article>`;
  }
};

/* ---------- Router + behaviour ---------- */
const app = document.getElementById('app'), nav = document.getElementById('nav');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
nav.innerHTML = `<span class="gl" aria-hidden="true"></span><span class="lens" aria-hidden="true"></span><a href="#nosotros" data-sec="nosotros">Nosotros</a>
  <div class="has-menu"><a href="#servicios" data-sec="servicios">Servicios</a><div class="mega g"><span class="gl" aria-hidden="true"></span><div class="mg-in"><ul>${SVC.map(s => `<li><a href="#servicio-${s.id}"><b>${s.name}</b><small>${s.tagline}</small></a></li>`).join('')}</ul><a class="mg-card" href="#servicio-supervision"><div class="mg-stack">${SVC.map(s => PH(s.card, 'std', s.name, s.id === 'supervision' ? 'on' : '')).join('')}</div><b>Supervisión técnica independiente</b><small>Obligatoria cuando el lote permite construir más de 2.000 m².</small></a><a class="mg-all" href="#servicios">Todos los servicios ${ARR}</a></div></div></div>
  <a href="#experiencia" data-sec="experiencia">Experiencia</a><a href="#perspectivas" data-sec="perspectivas">Perspectivas</a><a href="#contacto" data-sec="contacto">Contacto</a>`;
document.getElementById('f-svc').innerHTML = SVC.map(s => `<li><a href="#servicio-${s.id}">${s.name}</a></li>`).join('');
if (matchMedia('(pointer: fine)').matches && !reduce) { const mg = nav.querySelector('.mega'); mg.classList.add('beams'); beams(mg.querySelector('ul')); }
// The picture in the services menu follows the service under the pointer (or keyboard focus)
{ const mc = nav.querySelector('.mg-card'), pics = [...mc.querySelectorAll('.mg-stack > .ph')], mb = mc.querySelector('b'), ms = mc.querySelector('small');
  const show = i => { const sv = SVC[i]; pics.forEach((p, j) => p.classList.toggle('on', j === i)); mc.href = '#servicio-' + sv.id;
    mb.textContent = sv.id === 'supervision' ? 'Supervisión técnica independiente' : sv.name; ms.textContent = sv.id === 'supervision' ? 'Obligatoria cuando el lote permite construir más de 2.000 m².' : sv.tagline; };
  nav.querySelectorAll('.mega ul a').forEach((a, i) => { a.addEventListener('pointerenter', () => show(i)); a.addEventListener('focus', () => show(i)); }); }

// Barranquilla local time
const clock = document.getElementById('clock');
let clockF = null;
const tick = () => { try { clockF = clockF || new Intl.DateTimeFormat('es-CO', {hour: 'numeric', minute: '2-digit', timeZone: 'America/Bogota'}); const v = clockF.format(new Date()); if (clock.textContent !== v) clock.textContent = v; } catch (e) {} };
(window.requestIdleCallback || setTimeout)(tick, {timeout: 1200}); setInterval(tick, 30000);
try { document.getElementById('rt-fecha').textContent = new Intl.DateTimeFormat('es-CO', {day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'America/Bogota'}).format(new Date()).replace(/\//g, '-'); } catch (e) {}

const routes = [
  {re: /^(inicio)?$/, page: () => PAGES.home(), sec: '', title: () => ''},
  {re: /^nosotros$/, page: () => PAGES.about(), sec: 'nosotros', title: () => 'Nosotros'},
  {re: /^servicios$/, page: () => PAGES.services(), sec: 'servicios', title: () => 'Servicios'},
  {re: /^ley$/, page: () => PAGES.services(), sec: 'servicios', anchor: 'ley', title: () => 'Qué exige la Ley 1796 para su proyecto'},
  {re: /^servicio-(\w+)$/, page: m => PAGES.service(m[1]), sec: 'servicios', title: m => (svc(m[1]) || {name: 'Servicios'}).name},
  {re: /^experiencia(?:-(\w+))?$/, page: m => PAGES.work(m[1]), sec: 'experiencia', title: m => CATS[m[1]] ? 'Experiencia en ' + CATS[m[1]].toLowerCase() : 'Experiencia'},
  {re: /^proyecto-(\w+)$/, page: m => PAGES.project(m[1]), sec: 'experiencia', title: m => (prj(m[1]) || {name: 'Experiencia'}).name},
  {re: /^perspectivas$/, page: () => PAGES.insights(), sec: 'perspectivas', title: () => 'Perspectivas'},
  {re: /^articulo-(\w+)$/, page: m => PAGES.article(m[1]), sec: 'perspectivas', title: m => (ART.find(a => a.id === m[1]) || {title: 'Perspectivas'}).title},
  {re: /^contacto$/, page: () => PAGES.contact(), sec: 'contacto', title: () => 'Contacto'},
  {re: /^privacidad$/, page: () => PAGES.privacy(), sec: '', title: () => 'Tratamiento de datos personales'}
];
// Real addresses: published, the page carries <meta name="ddes:paths"> and every page has its own URL (/servicios/) for search
// engines and for sharing; the router keeps thinking in '#servicios'. Without the meta (the preview) links stay #links.
const PATHS = !!document.querySelector('meta[name="ddes:paths"]');
const k2p = h => { const k = String(h).replace(/^#/, ''); return !k || k === 'inicio' ? '/' : '/' + k + '/'; };
const here = () => { if (!PATHS) return location.hash; let k = ''; try { k = decodeURIComponent(location.pathname).replace(/^\/+|\/+$/g, ''); } catch (e) {} return k ? '#' + k : ''; };
const hrefOf = a => a.dataset.h || a.getAttribute('href'), linkSel = 'a[href^="#"],a[data-h]';
const pathLink = a => { const h = a.getAttribute('href'), k = h.slice(1); if (k && routes.some(r => r.re.test(k))) { a.dataset.h = h; a.setAttribute('href', k2p(h)); } };
const goTo = h => { if (!PATHS) { location.hash = h; return; } history.pushState(null, '', k2p(h)); dispatchEvent(new HashChangeEvent('hashchange')); };
const pathLinks = (root = document) => { if (!PATHS) return; if (root.matches && root.matches('a[href^="#"]')) pathLink(root); root.querySelectorAll('a[href^="#"]').forEach(pathLink); };
// Measurement (Google Analytics on the published site; does nothing in the preview): the moments that matter to the firm
const track = (name, params = {}) => { try { if (typeof gtag === 'function') gtag('event', name, params); } catch (e) {} };
// WebKit (Safari, and every browser on iPhone and iPad) draws the drop's glass lens far too slowly: there pages change with a
// quick cross-fade instead of the view transition
const SVT = !!document.startViewTransition && !(/AppleWebKit/.test(navigator.userAgent) && !/Chrome\/|Chromium|Edg\//.test(navigator.userAgent));
const scrollFns = new Set(), leaveFns = new Set();
let sq = 0, lastY = 0, routed = false, navSync = () => {}, navTone = () => {};
// While a page change animates, heavy set-up (the Ley model) waits for it to finish instead of stalling it
let navBusy = null, tbGlide = 0;
// Jumps far down the page measure real heights: sections not yet drawn are drawn for the jump, then left as they are
const cvAll = (ms = 1200) => { document.documentElement.classList.add('cv-all'); clearTimeout(cvAll.t); cvAll.t = setTimeout(() => document.documentElement.classList.remove('cv-all'), ms); };
// A section drawn for the first time can change height; the header and tab bar re-measure the dark bands on their next look
document.addEventListener('contentvisibilityautostatechange', () => { darkT = 0; }, true);
// While the page moves, refractive glass (an SVG filter redrawn every frame) swaps for an equivalent GPU blur; it bends again 160 ms after it stops
let scT = 0; const rootEl = document.documentElement;
addEventListener('scroll', () => { lastY = scrollY; if (!scT) rootEl.classList.add('is-scrolling'); clearTimeout(scT); scT = setTimeout(() => { scT = 0; rootEl.classList.remove('is-scrolling'); }, 160);
  if (!sq) sq = requestAnimationFrame(() => { sq = 0; scrollFns.forEach(f => f()); }); }, {passive: true});
addEventListener('resize', () => { scrollFns.forEach(f => f(true)); });
document.getElementById('skip').onclick = () => { app.focus(); window.scrollTo(0, app.offsetTop); };

// The site is one drawing set: each page is a sheet with its own code, printed in the title block and the breadcrumb
const sheetOf = h => { let m;
  if (!h || h === 'inicio') return 'E-00'; if (h === 'nosotros') return 'E-01'; if (h === 'servicios' || h === 'ley') return 'E-10';
  if ((m = h.match(/^servicio-(\w+)$/))) return 'E-1' + (Math.max(0, SVC.findIndex(x => x.id === m[1])) + 1);
  if (/^experiencia/.test(h)) return 'E-20'; if ((m = h.match(/^proyecto-(\w+)$/))) return 'E-2' + (Math.max(0, PRJ.findIndex(x => x.id === m[1])) + 1);
  if (h === 'perspectivas') return 'E-30'; if ((m = h.match(/^articulo-(\w+)$/))) return 'E-3' + (Math.max(0, ART.findIndex(x => x.id === m[1])) + 1);
  if (h === 'contacto') return 'E-40'; if (h === 'privacidad') return 'E-90'; return 'E-00'; };
// The S charges with the first screen's photographs of a new page (see the CSS above)
let sGen = 0;
function sCharge() {
  const g = ++sGen, logo = document.querySelector('.top .logo'); if (!logo) return; const [a, b] = logo.querySelectorAll('.sprog path'); if (!a) return;
  logo.classList.remove('charging');
  const imgs = [...app.querySelectorAll('.ph img:not(.pop)')].filter(i => !(i.complete && i.naturalWidth) && i.getBoundingClientRect().top < innerHeight * 1.3);
  let done = 0; const n = imgs.length;
  imgs.forEach(i => { const one = () => { if (g === sGen) done++; }; i.addEventListener('load', one, {once: true}); i.addEventListener('error', one, {once: true}); });
  // the stroke fills, top arc then bottom arc, with the photographs that are still arriving, but never faster than 0,7 s
  const start = () => { if (g !== sGen) return; const t0 = performance.now(); a.style.strokeDashoffset = b.style.strokeDashoffset = 1; logo.classList.add('charging');
    const step = now => { if (g !== sGen) return; const real = n && now - t0 < 5000 ? done / n : 1, p = Math.min(real, (now - t0) / 700);
      a.style.strokeDashoffset = 1 - Math.min(1, p * 2); b.style.strokeDashoffset = 1 - Math.max(0, p * 2 - 1);
      if (p < 1) requestAnimationFrame(step); else setTimeout(() => { if (g === sGen) logo.classList.remove('charging'); }, 260); };
    requestAnimationFrame(step); };
  if (document.documentElement.classList.contains('pre')) setTimeout(start, 2700); else start();
}
function route() {
  let h = ''; try { h = decodeURIComponent(here().slice(1)); } catch (e) {}
  const known = !h || routes.some(x => x.re.test(h));
  let r = routes.find(x => x.re.test(h)) || routes[0], m = h.match(r.re) || [''], html = null;
  // the finger landed on this link a moment ago and the intent preload already wrote this page's HTML: use it
  if (preHtml && preHtml.h === h && performance.now() - preHtml.t < 4000) html = preHtml.html; else { try { html = r.page(m); } catch (e) { console.error(e); } }
  preHtml = null;
  if (html == null) { r = routes[0]; m = ['']; html = PAGES.home(); }
  leaveFns.forEach(f => f()); leaveFns.clear(); scrollFns.clear();
  // Arriving through the drop, the page is already whole: its own entrance (rising lines, settling photo) would be a second step
  app.classList.toggle('arrive', routed && !reduce && SVT);
  app.innerHTML = html; pathLinks(app);
  nav.querySelectorAll('[data-sec]').forEach(a => a.dataset.sec === r.sec ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
  navSync(r.sec);
  const t = r.title(m); document.title = t ? `${t} · DDES` : 'DDES · Ingeniería estructural en Barranquilla';
  const sh = sheetOf(known ? h : ''), rh = document.getElementById('rt-hoja'); if (rh) rh.textContent = sh + ' · ' + (t || 'Inicio');
  const cr = app.querySelector('.crumbs'); if (cr) cr.insertAdjacentHTML('afterbegin', `<span class="sheet" title="Hoja del juego de planos">${sh}</span>`);
  window.scrollTo(0, 0);
  app.classList.remove('leave'); if (!SVT) { app.style.animation = 'none'; void app.offsetWidth; app.style.animation = ''; } else app.style.animation = 'none';
  wire(h);
  darkT = 0; hdrState();
  glassify();
  if (r.anchor) { const el = document.getElementById(r.anchor); if (el) cvAll(), window.scrollTo(0, Math.max(0, el.getBoundingClientRect().top + scrollY - topEl.offsetHeight - 16)); }
  if (!known) toast('Esa página no está en los planos. Le trajimos al inicio.');
  // Keyboard and screen-reader users land on the new page's heading, not on a link that no longer exists
  if (routed) { const h1 = app.querySelector('h1'); if (h1) { h1.tabIndex = -1; h1.focus({preventScroll: true}); } }
  routed = true;
  sCharge();
  later(obra);
}

// work that cannot be seen during a page change (it builds sections far below the fold) waits for the drop to finish
// (only if the same page is still there: a quick second page change must not wire a page that has already been replaced)
const later = f => { if (!navBusy) return f(); const k = app.firstElementChild; navBusy.then(() => (window.requestIdleCallback || setTimeout)(() => { if (app.firstElementChild === k) f(); }, {timeout: 600})); };
// The hero's beam. The orange bar behind "Estructuras." is a reinforced-concrete beam on two supports. Under the pointer it gives
// a little where it is touched and rings back (pressing loads it more). Scrolling is a load test filmed in one shot: a load comes
// down on midspan, the beam takes its true elastic curve (P and δ read out), hairline flexural cracks climb from the bottom fibre,
// it snaps at midspan with clean chips and fine dust, and the fracture keeps running through the whole frame: the hero splits along
// it, the two halves swing away and fall, and the next section is already there underneath. Every frame is a pure function of the
// scroll position (it rewinds); one canvas draws the beam (copied into the second half once the frame splits).
function beamHero() {
  const sec = app.querySelector('.hhero.hh-scene'); if (!sec) return;
  const pin = sec.querySelector('.hh-pin'), hl = sec.querySelector('.hh-half'), w = hl.querySelector('.hello');
  const cv = hl.querySelector('.hh-beam'), photo = hl.querySelector(':scope > .ph'), inn = hl.querySelector('.hh-in'), dofEl = hl.querySelector('.hh-dof');
  if (reduce || !cv.getContext) { sec.classList.add('still'); return; }
  let g = cv.getContext('2d'); const gCv = g, hold = sec.dataset.mode !== 'break', nxt = sec.nextElementSibling;
  // on the home page the beam is drawn on a layer of its own above the next section (see the hand-off in draw)
  const fly = hold ? document.createElement('canvas') : cv; if (hold) { fly.className = 'hh-fly'; fly.setAttribute('aria-hidden', 'true'); document.body.appendChild(fly); }
  const gFly = hold ? fly.getContext('2d') : g;
  const spanOf = () => Math.max(1, sec.offsetHeight - pin.offsetHeight * (hold ? 2 : 1));
  const rng = seed => () => { seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v)), seg = (p, a, b) => clamp((p - a) / (b - a)), sm = t => t * t * (3 - 2 * t);
  let k = 1, W = 0, H = 0, B = null, tex = null, lay = null, lg = null, LB = null, puff = null, font = '', ready = false, span = spanOf();
  let cracks = [], chips = [], specks = [], haze = [];
  let prog = 0, target = 0, lastT = 0, drawn = '', raf = 0, hov = 0, hovT = 0, vel = 0, hraf = 0, pressing = false, pressT = 0, hoverA = .5;
  // the ending runs in time, not in scroll: once the load reaches its peak it plays out by itself (the release on the home page,
  // the break on the pathology page); scrolling back to the top resets it
  let broken = false, bk = 0;
  let shapeA = -1, shape = null;
  // elastic line of a simply supported beam under a point load at a (fraction of the span), 1 at its deepest point
  const setLoadAt = a => { a = clamp(a, .1, .9); if (Math.abs(a - shapeA) < .004) return; shapeA = a; const b = 1 - a, f = u => u <= a ? b * u * (1 - b * b - u * u) : a * (1 - u) * (1 - a * a - (1 - u) * (1 - u)); let m = 0; for (let i = 1; i < 80; i++) m = Math.max(m, f(i / 80)); shape = u => f(clamp(u)) / m; };
  setLoadAt(.5);
  // the load climbs quickly to three quarters, then slowly to its peak at BRK: just under the limit when it holds, failure when it breaks
  const BRK = hold ? .97 : .6, MEND = hold ? .04 : .25, BK_END = hold ? 2.2 : 1.8, LMAX = hold ? .92 : 1;
  const loadAt = p => p < .2 ? .76 * sm(seg(p, .02, .2)) : .76 + (LMAX - .76) * Math.pow(seg(p, .2, BRK), 1.25);
  // let go: a beat at the peak, then the load comes off and the beam springs back past straight and settles (a damped ring)
  const rel = t => t <= .35 ? 1 : Math.exp(-4.2 * (t - .35)) * Math.cos(9 * (t - .35));
  // controlled tremor: three layered frequencies, never random jitter
  const wob = (t, a, b, c) => Math.sin(t * a) * .55 + Math.sin(t * b + 1.7) * .3 + Math.sin(t * c + 4.1) * .15;
  // the hinge at midspan once it snaps: it drops past its rest, swings back and settles (a damped swing on the two bearings)
  const hingeAt = t => t <= 0 ? 0 : 1 - Math.exp(-5.2 * t) * Math.cos(9.5 * t);

  const measure = () => {
    document.getAnimations().forEach(an => { if (an.effect && an.effect.target === w) an.finish(); });
    inn.style.translate = '';
    const im = photo && photo.querySelector('img');
    if (im && im.complete && im.naturalWidth && !sec.dataset.dof) { try { const bw = 360, bh = Math.round(bw * im.naturalHeight / im.naturalWidth), bc = document.createElement('canvas'); bc.width = bw; bc.height = bh;
      const bx = bc.getContext('2d'); bx.filter = 'blur(5px) saturate(1.1)'; bx.drawImage(im, -12, -12, bw + 24, bh + 24); dofEl.style.backgroundImage = `url(${bc.toDataURL('image/jpeg', .8)})`; sec.dataset.dof = '1'; } catch (e) {} }
    else if (im && !sec.dataset.dof) im.addEventListener('load', () => { ready = false; drawn = ''; req(); }, {once: true});
    k = Math.min(2, devicePixelRatio || 1); span = spanOf();
    const P = pin.getBoundingClientRect(); W = P.width; H = P.height;
    cv.width = Math.round(W * k); cv.height = Math.round(H * k);
    if (hold) { fly.width = cv.width; fly.height = cv.height; fly.style.width = W + 'px'; fly.style.height = H + 'px'; }
    const r = w.getBoundingClientRect(), cs = getComputedStyle(w);
    B = {x: r.left - P.left, y: r.top - P.top, w: r.width, h: r.height};
    const pr = document.createElement('i'); pr.style.cssText = 'display:inline-block;width:0;height:0;vertical-align:baseline'; w.appendChild(pr); const base = pr.getBoundingClientRect().top; pr.remove();
    const rg = document.createRange(); rg.selectNodeContents(w); const tl = rg.getClientRects()[0] ? rg.getClientRects()[0].left : r.left;
    // the bar is drawn opaque, bent into an offscreen layer and laid over the photograph in one piece (no seams)
    tex = document.createElement('canvas'); tex.width = Math.ceil(B.w * k); tex.height = Math.ceil(B.h * k);
    const c = tex.getContext('2d'); c.scale(k, k); c.fillStyle = 'rgb(232,120,74)'; c.fillRect(0, 0, B.w, B.h);
    c.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`; try { c.letterSpacing = cs.letterSpacing; } catch (e) {}
    c.fillStyle = '#0f0e0d'; c.textBaseline = 'alphabetic'; c.fillText(w.textContent, tl - r.left, base - r.top);
    LB = {x: B.x - 24, y: B.y - 24, w: B.w + 48, h: B.h * 2.6 + 48};
    lay = document.createElement('canvas'); lay.width = Math.ceil(LB.w * k); lay.height = Math.ceil(LB.h * k); lg = lay.getContext('2d');
    font = getComputedStyle(document.body).fontFamily;
    build(); ready = true;
  };
  const build = () => {
    const rnd = rng(20261003);
    // hairline flexural cracks: the central one first, the others a little later and shorter, each with one fine branch
    cracks = [0, -.07, .065, -.13, .125].map((du, i) => { const pts = [[.5 + du, 0]], top = i ? .3 + .22 * (1 - Math.abs(du) * 6) : .8; let u = .5 + du, v = 0, dir = (rnd() - .5) * .01;
      while (v < top) { v = Math.min(top, v + .055 + rnd() * .05); dir = dir * .6 + (rnd() - .5) * .014; u += dir; pts.push([u, v]); }
      const br = []; if (pts.length > 4) { const at = pts[2 + Math.floor(rnd() * (pts.length - 3))]; let bu = at[0], bv = at[1]; br.push([bu, bv]); for (let q = 0; q < 3; q++) { bu += (du < 0 ? -1 : 1) * (.008 + rnd() * .01); bv += .035 + rnd() * .03; br.push([bu, bv]); } }
      return {pts, br, start: i ? .25 + Math.abs(du) * 3 : 0}; });
    // the snap's debris, a little of it: clean chips of the bar, a few fine specks, a faint haze
    const cx = [B.x + B.w / 2, B.y + B.h + B.h * .46];
    chips = Array.from({length: 14}, () => { const n = 3 + Math.floor(rnd() * 3), sz = 2 + rnd() * 5.5, poly = []; for (let q = 0; q < n; q++) { const a = q / n * Math.PI * 2 + rnd() * .6, rr = sz * (.6 + rnd() * .5); poly.push([Math.cos(a) * rr, Math.sin(a) * rr]); }
      return {poly, x: cx[0] + (rnd() - .5) * B.w * .05, y: cx[1] - rnd() * B.h * .5, vx: (rnd() - .5) * 220, vy: -20 - rnd() * 140, spin: (rnd() - .5) * 10, tone: rnd() < .35 ? 'rgb(196,92,52)' : rnd() < .5 ? 'rgb(244,150,104)' : 'rgb(232,120,74)', d: rnd() * .06}; });
    specks = Array.from({length: 22}, () => ({x: cx[0] + (rnd() - .5) * B.w * .04, y: cx[1] - rnd() * B.h * .4, vx: (rnd() - .5) * 300, vy: -60 - rnd() * 220, r: .6 + rnd() * .9, d: rnd() * .05, life: .4 + rnd() * .5}));
    haze = Array.from({length: 6}, () => ({x: cx[0] + (rnd() - .5) * B.w * .06, y: cx[1] - rnd() * B.h * .2, vx: (rnd() - .5) * 40, vy: 6 + rnd() * 20, r0: 8 + rnd() * 12, gr: 30 + rnd() * 40, d: rnd() * .1}));
    if (!puff) { puff = document.createElement('canvas'); puff.width = puff.height = 64; const pg = puff.getContext('2d'), gr = pg.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(250,228,210,.5)'); gr.addColorStop(1, 'rgba(250,228,210,0)'); pg.fillStyle = gr; pg.fillRect(0, 0, 64, 64); }
  };

  // ---- drawing, in CSS pixels of the pinned frame
  const drop = (u, D, hd) => D * shape(u) + hd * (u < .5 ? u / .5 : (1 - u) / .5);   // elastic line + the hinge once it snaps
  const beam = (D, hd) => {
    lg.setTransform(k, 0, 0, k, -LB.x * k, -LB.y * k); lg.clearRect(LB.x, LB.y, LB.w, LB.h);
    const N = Math.max(56, Math.round(B.w / 4)), sw = B.w / N, tw = tex.width / N;
    for (let i = 0; i < N; i++) { const u0 = i / N, u1 = (i + 1) / N, d0 = drop(u0, D, hd), d1 = drop(u1, D, hd);
      lg.save(); lg.translate(B.x + (u0 + u1) / 2 * B.w, B.y + B.h / 2 + (d0 + d1) / 2); lg.rotate(Math.atan2(d1 - d0, sw)); lg.drawImage(tex, i * tw, 0, tw + .6, tex.height, -sw / 2, -B.h / 2, sw + .9, B.h); lg.restore(); }
    g.globalAlpha = .97; g.drawImage(lay, LB.x, LB.y, LB.w, LB.h); g.globalAlpha = 1; };
  // a crack is a hairline that is widest where it opened (the bottom fibre) and runs out to nothing at its tip
  const hair = (pts, frac, w0, col) => { const n = (pts.length - 1) * frac; if (n <= 0) return; const fl = Math.floor(n); g.strokeStyle = col; g.lineCap = 'round';
    for (let i = 0; i < Math.ceil(n); i++) { const A = pts[i], C = pts[i + 1], f = i < fl ? 1 : n - fl; g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(A[0] + (C[0] - A[0]) * f, A[1] + (C[1] - A[1]) * f); g.lineWidth = Math.max(.35, w0 * (1 - i / (pts.length - 1))); g.stroke(); } };
  const crackDraw = (c, D, hd, open) => { if (c <= 0) return; g.save(); g.beginPath(); for (let i = 0; i <= 40; i++) g.lineTo(B.x + i / 40 * B.w, B.y + drop(i / 40, D, hd) - 1); for (let i = 40; i >= 0; i--) g.lineTo(B.x + i / 40 * B.w, B.y + B.h + drop(i / 40, D, hd) + (open > 0 ? B.h * 2 : 0)); g.closePath(); g.clip(); crackIn(c, D, hd, open); g.restore(); };
  const crackIn = (c, D, hd, open) => { const at = (u, v) => [B.x + u * B.w, B.y + (1 - v) * B.h + drop(u, D, hd)], w0 = Math.max(1.3, B.h * .016);
    cracks.forEach((cr, i) => { const q = clamp((c - cr.start) / (1 - cr.start)); if (q <= 0) return; const pts = cr.pts.map(p => at(p[0], p[1]));
      // the central crack opens into a wedge as the hinge turns
      if (!i && open > 0) { const wd = open, wAt = j => wd * (1 - j / (pts.length - 1));
        g.beginPath(); pts.forEach((p, j) => { j ? g.lineTo(p[0] - wAt(j), p[1]) : g.moveTo(p[0] - wAt(j), p[1]); }); for (let j = pts.length - 1; j >= 0; j--) g.lineTo(pts[j][0] + wAt(j), pts[j][1]); g.closePath(); g.fillStyle = '#120c09'; g.fill(); }
      hair(pts, q, w0, 'rgba(18,11,8,.92)'); if (cr.br.length && q > .6) hair(cr.br.map(p => at(p[0], p[1])), (q - .6) / .4, w0 * .6, 'rgba(18,11,8,.8)'); }); };
  const debris = t => { if (t <= 0) return;
    haze.forEach(h => { const tt = t - h.d; if (tt <= 0 || tt > 1.4) return; const r = h.r0 + h.gr * tt, a = .1 * Math.sin(Math.PI * tt / 1.4); g.globalAlpha = a; g.drawImage(puff, h.x + h.vx * tt - r, h.y + h.vy * tt - r, r * 2, r * 2); }); g.globalAlpha = 1;
    chips.forEach(c => { const tt = t - c.d; if (tt <= 0) return; const x = c.x + c.vx * tt, y = c.y + c.vy * tt + 1400 * tt * tt; if (y > H + 20) return;
      g.save(); g.translate(x, y); g.rotate(c.spin * tt); g.beginPath(); c.poly.forEach((q, i) => i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1])); g.closePath(); g.fillStyle = c.tone; g.fill(); g.restore(); });
    g.lineCap = 'round'; specks.forEach(s => { const tt = t - s.d; if (tt <= 0 || tt > s.life) return; const vy = s.vy + 2600 * tt, x = s.x + s.vx * tt, y = s.y + s.vy * tt + 1300 * tt * tt, a = 1 - tt / s.life;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x - s.vx * .016, y - vy * .016); g.strokeStyle = `rgba(255,224,200,${(.75 * a).toFixed(3)})`; g.lineWidth = s.r; g.stroke(); }); };
  // the deflection, as a drawing would dimension it: the beam's unloaded top edge, dashed, and δ measured down from it at midspan
  const dimension = (D, alpha, adm = 0) => { if (alpha <= .01 || D < 4) return; const x = B.x + B.w * shapeA, y0 = B.y, y1 = B.y + D * shape(shapeA), a = alpha * seg(D, 4, 14);
    g.save(); g.globalAlpha = a; g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 1; g.setLineDash([2, 5]); g.beginPath(); g.moveTo(B.x, y0 - .5); g.lineTo(B.x + B.w, y0 - .5); g.stroke(); g.setLineDash([]);
    g.strokeStyle = 'rgba(255,255,255,.9)'; g.beginPath(); g.moveTo(x, y0 + 2); g.lineTo(x, y1 - 2); g.moveTo(x - 4, y0); g.lineTo(x + 4, y0); g.moveTo(x - 4, y1); g.lineTo(x + 4, y1); g.stroke();
    const mm = (D / (B.h * .46) * (hold ? 34.1 : 48)).toFixed(1).replace('.', ',');
    g.font = `500 ${W < 760 ? 12 : 13}px ${font}`; try { g.fontVariantNumeric = 'tabular-nums'; } catch (e) {} g.fillStyle = '#fff'; g.textBaseline = 'middle'; g.textAlign = 'left';
    const ty = y1 - y0 > 18 ? (y0 + y1) / 2 : y0 - 8; if (y1 - y0 <= 18) g.textBaseline = 'alphabetic';
    g.fillText(`δ ${mm} mm`, x + 10, ty);
    if (adm > .01) { const tw = g.measureText(`δ ${mm} mm`).width; g.globalAlpha = a * adm; g.fillStyle = 'rgba(255,255,255,.62)'; g.fillText(`≤ L/240 = 33,3 mm`, x + 18 + tw, ty); }
    g.restore(); };

  const draw = () => {
    raf = 0; if (!ready) measure();
    // the scene glides toward the scroll position (a wheel's steps become one continuous motion); a jump far away is taken at once
    const nowMs = performance.now(), dt = Math.min(.05, lastT ? (nowMs - lastT) / 1000 : .016); lastT = nowMs;
    if (Math.abs(target - prog) > .3) prog = target; else { prog += (target - prog) * (1 - Math.exp(-dt * 7)); if (Math.abs(target - prog) < .0003) prog = target; }
    // the break: it starts once the beam reaches failure and plays out by itself; back near the top it rewinds, a little faster
    if (!hold && !broken && prog >= BRK) broken = true; else if (broken && target < MEND) broken = false;
    const bk0 = bk; bk = broken ? Math.min(BK_END, bk + dt) : hold ? 0 : Math.max(0, bk - dt * 2.2); const playing = bk !== bk0;
    const now = nowMs / 1000, p = broken || bk > 0 ? Math.min(prog, BRK) : prog, L0 = loadAt(p), live = p > .0005 || hov > .002 || bk > 0;
    const L = hold && bk > 0 ? LMAX * rel(bk) : Math.max(L0, hov), Lv = hold && bk > 0 ? Math.max(0, L) : L0;
    // holding, only hairlines show near the limit and they close again once it is let go; breaking, they run through
    const c = hold ? Math.max(.5 * sm(seg(L0, .84, LMAX)) * (bk > 0 ? 1 - sm(seg(bk, .35, .8)) : 1), seg(hov, .42, .6) * .3)
      : Math.max(sm(seg(p, .34, BRK)), seg(hov, .42, .6) * .3, bk > 0 ? 1 : 0);
    const ten = hold ? Math.pow(seg(L0, .74, LMAX), 1.4) * (1 - seg(bk, 0, .35)) : bk > 0 ? 0 : Math.pow(seg(L0, .74, 1), 1.4);
    sec.classList.toggle('live', live);
    const ntop = hold && nxt ? Math.round(nxt.getBoundingClientRect().top) : 0;
    const key = `${p.toFixed(4)}|${hov.toFixed(4)}|${hoverA.toFixed(3)}|${bk.toFixed(3)}|${ntop}`; if (key === drawn && !ten && prog === target) return; drawn = key;
    g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, cv.width, cv.height);
    if (hold) { gFly.setTransform(1, 0, 0, 1, 0, 0); gFly.clearRect(0, 0, fly.width, fly.height); }
    if (!live) { photo.style.transform = ''; inn.style.opacity = ''; dofEl.style.opacity = ''; if (prog !== target && !raf) raf = requestAnimationFrame(draw); return; }
    setLoadAt(hoverA + (.5 - hoverA) * seg(p, 0, .05));
    // after the snap the elastic bend gives way to the hinge: the two halves turn about the supports and settle in a V
    const give = hold ? 0 : sm(seg(bk, 0, .14)), Dm = B.h * .46, D = Dm * L * (1 - give) * (1 + .01 * ten * wob(now, 83, 127, 151)), hd = hold ? 0 : B.h * .5 * hingeAt(bk);
    const open = !hold && bk > 0 ? Math.max(0, hd) * .16 + 2 * sm(seg(bk, 0, .06)) : 0;
    // only the beam trembles, faintly, as failure nears; one short kick at the snap
    const amp = Math.min(2.6, W / 520) * ten * ten + (!hold && bk > 0 && bk < .7 ? 5 * Math.exp(-8 * bk) : 0), sx = amp * wob(now, 37, 61, 97), sy = amp * .7 * wob(now + 3, 43, 71, 113);
    photo.style.transform = `scale(${(1 + .04 * Lv).toFixed(4)})`;
    // isolation: as failure nears the background slips out of focus and the words step back; after the break it all comes back
    const iso = bk > 0 ? 1 - sm(seg(bk, .5, 1.5)) : sm(seg(L0, .72, .97));
    inn.style.opacity = iso > .001 ? (1 - .75 * iso).toFixed(3) : '';
    dofEl.style.opacity = iso > .001 ? (.7 * iso).toFixed(3) : ''; dofEl.style.transform = photo.style.transform;
    g.setTransform(k, 0, 0, k, 0, 0);
    if (L0 > 0) { const vg = g.createRadialGradient(W / 2, H * .55, H * .2, W / 2, H * .55, H * .95); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, `rgba(0,0,0,${(.22 * L0 * (bk > 0 ? (hold ? iso : .6 + .4 * iso) : 1)).toFixed(3)})`); g.fillStyle = vg; g.fillRect(0, 0, W, H); }
    // the hand-off: where the rising section's edge meets the beam it carries it; the sag gives way to a slight upward bow as the
    // beam rides on the edge (held at its middle, its ends droop), the tremor stops, and it leaves the frame with the edge
    let lift = 0, carry = 0, Db = D;
    if (hold && nxt) { const mb = B.y + B.h + D * shape(.5); if (mb > ntop) { carry = sm(clamp((mb - ntop) / (B.h * .9))); Db = D * (1 - carry); lift = ntop - (B.y + B.h + Db * shape(.5)); } }
    if (hold) { g = gFly; g.setTransform(k, 0, 0, k, 0, 0); }
    g.translate(sx * (1 - carry), sy * (1 - carry) + lift);
    if (B.y + B.h * 2.6 + lift > 0) { beam(Db, hd); crackDraw(c, Db, hd, open); }
    dimension(Db, (bk > 0 ? (hold ? 1 - seg(bk, .35, .75) : 0) : 1) * Math.max(seg(p, .03, .1), seg(hov, .02, .06)) * (1 - carry), hold ? seg(L0, .84, LMAX) : 0);
    g.setTransform(k, 0, 0, k, 0, 0); if (!hold) debris(bk); g = gCv;
    if ((ten > 0 || prog !== target || playing) && !raf) raf = requestAnimationFrame(draw);
  };
  const req = () => { if (!raf) raf = requestAnimationFrame(draw); };
  scrollFns.add(() => { span = spanOf(); const r = sec.getBoundingClientRect(); if (r.bottom < -innerHeight || r.top > innerHeight) { if (hold && fly.width) { gFly.setTransform(1, 0, 0, 1, 0, 0); gFly.clearRect(0, 0, fly.width, fly.height); } return; } const q = clamp(-r.top / span);
    if (q !== target || hold) { target = q; req(); } });
  // the pointer: a light touch bends it a little where it rests; pressing loads it more; letting go, it rings and settles
  const spring = () => { hraf = 0; if (pressing) hovT = Math.min(.62, .08 + (performance.now() - pressT) / 1500 * .6);
    vel += (hovT - hov) * .12; vel *= .8; hov = Math.max(0, hov + vel); draw(); if (pressing || Math.abs(vel) > .0004 || Math.abs(hovT - hov) > .001) hraf = requestAnimationFrame(spring); else if (!hovT) { hov = 0; draw(); } };
  const kick = () => { if (!hraf) hraf = requestAnimationFrame(spring); };
  const at = e => { if (target > .03 || bk > 0) return false; if (!ready) measure(); const r = w.getBoundingClientRect(); hoverA = clamp((e.clientX - r.left) / r.width); return true; };
  w.addEventListener('pointerenter', e => { if (at(e)) { hovT = .07; kick(); } });
  w.addEventListener('pointermove', e => { if (at(e)) { if (!pressing) hovT = .07; kick(); } }, {passive: true});
  w.addEventListener('pointerdown', e => { if (at(e)) { pressing = true; pressT = performance.now(); kick(); } });
  const up = () => { if (pressing) { pressing = false; hovT = w.matches(':hover') ? .07 : 0; kick(); } };
  addEventListener('pointerup', up); addEventListener('pointercancel', up); w.addEventListener('pointerleave', () => { if (!pressing) { hovT = 0; kick(); } });
  const rs = () => { ready = false; drawn = ''; req(); }; addEventListener('resize', rs);
  if (document.fonts) { document.fonts.ready.then(() => { if (sec.isConnected) rs(); }); document.fonts.addEventListener('loadingdone', rs); }
  leaveFns.add(() => { removeEventListener('resize', rs); removeEventListener('pointerup', up); removeEventListener('pointercancel', up); if (document.fonts) document.fonts.removeEventListener('loadingdone', rs); cancelAnimationFrame(raf); cancelAnimationFrame(hraf); if (hold) fly.remove(); });
}

function wire(h) {
  statements();
  beamHero();
  dataColumns(); countUp();
  mzDrag();
  hscroll();
  deferLaw();
  // Contact form prefilled by the law assistant
  const cf = document.getElementById('cform');
  if (cf) { try { const d = JSON.parse(sessionStorage.getItem('ddes-ley') || 'null'); if (d) {
    const sel = cf.querySelector('#f-area'); sel.selectedIndex = d.area <= 2000 ? 0 : d.area <= 10000 ? 1 : 2;
    cf.querySelector('#f-msg').value = `${d.usoTxt}, ${d.pisos} pisos, ${d.area.toLocaleString('es-CO')} m². ${d.summary}`;
    ['c-revision', 'c-supervision'].forEach(id => { const c = cf.querySelector('#' + id); if (c && d.big) c.checked = true; });
    sessionStorage.removeItem('ddes-ley'); } } catch (e) {} }
  const fa = document.getElementById('f-area');
  if (fa) { const hint = document.getElementById('f-area-hint'), say = () => { hint.textContent = fa.selectedIndex === 1 || fa.selectedIndex === 2 ? 'Con esta área la Ley 1796 exige revisión independiente del diseño y supervisión técnica.' : fa.selectedIndex === 3 ? 'Si el lote permite construir más de 2.000 m², la ley exige revisión y supervisión independientes.' : ''; }; fa.addEventListener('change', say); say(); }
  details();
  // Exploded node
  if (document.getElementById('node')) nodeDiagram();
  // The questions rest on beams too, like the service rows in the menu
  if (!reduce && matchMedia('(pointer: fine)').matches) app.querySelectorAll('.faq').forEach(fq => { fq.classList.add('beams'); beams(fq, 'details', 'summary', true); });
  // Featured projects
  const fn = document.getElementById('feat-next');
  if (fn) {
    const feat = ['arte57', 'ebano', 'solemio', 'cannon'].map(prj); let i = 0;
    const show = d => { i = (i + d + feat.length) % feat.length; const p = feat[i];
      app.querySelector('.feature .ph').outerHTML = PH(pimg(p), 'wide', p.name);
      const n = document.getElementById('feat-name'); n.textContent = p.name; n.href = '#proyecto-' + p.id;
      document.getElementById('feat-loc').textContent = p.loc; document.getElementById('feat-n').textContent = `${i + 1} / ${feat.length}`; };
    fn.onclick = () => show(1); document.getElementById('feat-prev').onclick = () => show(-1);
  }
  // Filters
  const wg = document.getElementById('work-grid');
  if (wg) {
    const apply = f => { app.querySelectorAll('.filters button').forEach(b => b.setAttribute('aria-pressed', b.dataset.f === f)); wg.querySelectorAll('.card').forEach(c => c.hidden = f !== 'all' && c.dataset.cat !== f); const we = document.getElementById('work-empty'); if (we) we.hidden = f === 'all' || [...wg.children].some(c => !c.hidden); const tr = app.querySelector('.tray'); if (tr) tr.dataset.f = f; railTo(app.querySelector('.filters'), app.querySelector('.filters [aria-pressed="true"]')); };
    app.querySelectorAll('.filters button').forEach(b => b.onclick = () => apply(b.dataset.f));
    const m = h.match(/^experiencia-(\w+)$/); apply(m && CATS[m[1]] ? m[1] : 'all');
  }
  // Section bar
  const sn = app.querySelector('.subnav');
  if (sn) {
    const btns = [...sn.querySelectorAll('[data-go]')], off = () => document.querySelector('.top').offsetHeight + sn.offsetHeight;
    btns.forEach(b => b.onclick = () => { const t = document.getElementById(b.dataset.go); cvAll(1600); window.scrollTo({top: t.getBoundingClientRect().top + scrollY - off() + 1, behavior: reduce ? 'auto' : 'smooth'}); });
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { btns.forEach(b => b.classList.toggle('on', b.dataset.go === e.target.id)); railTo(sn.querySelector('.sn-links'), btns.find(b => b.classList.contains('on'))); } }), {rootMargin: '-40% 0px -55% 0px'});
    railTo(sn.querySelector('.sn-links'), btns.find(b => b.classList.contains('on')));
    btns.forEach(b => { const t = document.getElementById(b.dataset.go); if (t) io.observe(t); });
    leaveFns.add(() => io.disconnect());
  }
  // Form: say exactly what is missing, mark it, and put the cursor there
  const f = document.getElementById('cform');
  if (f) f.addEventListener('submit', e => {
    e.preventDefault();
    const name = f.querySelector('#f-name'), mail = f.querySelector('#f-mail'), okc = f.querySelector('#f-ok'), out = document.getElementById('fmsg'), bad = [];
    if (!name.value.trim()) bad.push(name);
    if (!/^\S+@\S+\.\S+$/.test(mail.value.trim())) bad.push(mail);
    if (!okc.checked) bad.push(okc);
    [name, mail, okc].forEach(el => el.setAttribute('aria-invalid', bad.includes(el)));
    if (bad.length) { out.textContent = bad.length === 1 && bad[0] === okc ? 'Para responderle necesitamos su autorización para tratar sus datos.' : 'Escriba su nombre y un correo válido para poder responderle.'; bad[0].focus(); return; }
    f.querySelector('.nut')?.classList.add('torqued');
    const v = id => (f.querySelector('#' + id) || {}).value || '', svcs = [...f.querySelectorAll('.pick input:checked')].map(i => i.nextElementSibling.textContent).join(', ');
    const body = [['Nombre', v('f-name')], ['Empresa', v('f-co')], ['Correo', v('f-mail')], ['Teléfono', v('f-tel')], ['Etapa', v('f-stage')], ['Servicios', svcs],
      ['Ciudad del proyecto', v('f-city')], ['Área construida', v('f-area')], ['Proyecto', v('f-msg')]].filter(r => r[1].trim()).map(r => `${r[0]}: ${r[1].trim()}`).join('\n');
    const via = (e.submitter && e.submitter.dataset.via) || 'web', who = name.value.trim().replace(/[<&]/g, ''), subject = 'Solicitud de propuesta — ' + v('f-name').trim();
    if (f.querySelector('[name=_honey]').value) return;
    track('generate_lead', {method: via, etapa: v('f-stage'), servicios: svcs, area: v('f-area')});
    if (via === 'correo') {
      location.href = `mailto:gerencia@ddes.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      out.innerHTML = `Gracias, ${who}. Su correo se abrió con la solicitud lista para enviar. Si no se abrió, use «Enviar solicitud» o escríbanos por <a href="https://wa.me/573002021920" target="_blank" rel="noopener">WhatsApp</a>.`;
      return;
    }
    const btns = f.querySelectorAll('button[type=submit]'); btns.forEach(x => x.disabled = true); out.textContent = 'Enviando…';
    const data = {_subject: subject, _template: 'table', _replyto: v('f-mail').trim(), _captcha: 'false'};
    body.split('\n').forEach(l => { const k = l.indexOf(': '); data[l.slice(0, k)] = l.slice(k + 2); });
    fetch('https://formsubmit.co/ajax/gerencia@ddes.co', {method: 'POST', headers: {'Content-Type': 'application/json', Accept: 'application/json'}, body: JSON.stringify(data)})
      .then(r => r.json()).then(j => { if (String(j.success) !== 'true') throw new Error(j.message || 'no enviado');
        out.innerHTML = `Gracias, ${who}. Recibimos su solicitud: un ingeniero le responde a ${v('f-mail').trim().replace(/[<&]/g, '')} con una propuesta.`; f.reset(); })
      .catch(() => { out.innerHTML = `No pudimos enviarla desde aquí. Use «Enviar desde mi correo» o escríbanos por <a href="https://wa.me/573002021920" target="_blank" rel="noopener">WhatsApp</a>.`; })
      .finally(() => btns.forEach(x => x.disabled = false));
  });
}

// 2 · Each service row sits on a simply supported beam. Hovering applies a point load P at the cursor:
//     y(x) = P·b·x·(L² − b² − x²) / (6·E·I·L)   for x ≤ a   (b = L − a, mirrored for x > a)
// The load magnitude follows a damped spring, so the beam sags smoothly and rings briefly when released.
function beams(list, rowSel = 'li', hitSel = 'a', inHit = false) {
  const NS = 'http://www.w3.org/2000/svg', items = [];
  list.querySelectorAll(rowSel).forEach(row => {
    const a = row.querySelector(hitSel), li = inHit ? a : row; if (!a) return;
    const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('class', 'beam'); svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS(NS, 'path'), load = document.createElementNS(NS, 'path'), txt = document.createElementNS(NS, 'text');
    load.setAttribute('class', 'load'); svg.append(path, load, txt); li.appendChild(svg);
    const it = {li, svg, path, load, txt, a: .5, ta: .5, q: 0, v: 0, target: 0, w: 0};
    a.addEventListener('pointermove', e => { const r = li.getBoundingClientRect(); it.ta = Math.min(.96, Math.max(.04, (e.clientX - r.left) / r.width)); it.target = 1; kick(); });
    a.addEventListener('pointerenter', e => { const r = li.getBoundingClientRect(); it.a = it.ta = Math.min(.96, Math.max(.04, (e.clientX - r.left) / r.width)); it.target = 1; kick(); });
    a.addEventListener('pointerleave', () => { it.target = 0; kick(); });
    items.push(it);
  });
  const MAX = 9, N = 48; // max sag in px for a load at midspan
  const shape = (x, a) => { const b = 1 - a; return x <= a ? b * x * (1 - b * b - x * x) : a * (1 - x) * (1 - a * a - (1 - x) * (1 - x)); };
  const norm = shape(.5, .5); // midspan deflection for a midspan load (= 1/16)
  const draw = it => {
    const w = it.li.clientWidth, H = 14; it.svg.setAttribute('viewBox', `0 0 ${w} 28`);
    let d = '', ymax = 0;
    for (let i = 0; i <= N; i++) { const x = i / N, y = MAX * it.q * shape(x, it.a) / norm; ymax = Math.max(ymax, y); d += (i ? 'L' : 'M') + (x * w).toFixed(1) + ' ' + (H + y).toFixed(2); }
    it.path.setAttribute('d', d);
    it.path.style.stroke = it.q > .02 ? `color-mix(in srgb, var(--accent) ${Math.min(100, it.q * 100).toFixed(0)}%, var(--line))` : '';
    const lx = it.a * w, ly = H + MAX * it.q * shape(it.a, it.a) / norm, show = Math.max(0, Math.min(1, it.q));
    it.load.setAttribute('d', `M${lx - 4} ${ly - 9}L${lx + 4} ${ly - 9}L${lx} ${ly - 2}Z`); it.load.style.opacity = show;
    it.txt.setAttribute('x', lx + 8); it.txt.setAttribute('y', ly - 4); it.txt.style.opacity = show;
    it.txt.textContent = `δ ${(ymax * .6).toFixed(1).replace('.', ',')} mm`;
  };
  let raf = 0, last = 0;
  const step = t => {
    const dt = Math.min(.032, (t - (last || t)) / 1000) || .016; last = t; let busy = false;
    for (const it of items) {
      it.a += (it.ta - it.a) * Math.min(1, dt * 14);                  // load slides with the cursor
      const k = 170, c = it.target ? 26 : 7;                             // softer damping on release: the beam rings
      it.v += (-k * (it.q - it.target) - c * it.v) * dt; it.q += it.v * dt;
      if (Math.abs(it.q - it.target) > .001 || Math.abs(it.v) > .001 || Math.abs(it.ta - it.a) > .001) busy = true; else { it.q = it.target; it.v = 0; }
      draw(it);
    }
    raf = busy ? requestAnimationFrame(step) : 0; if (!busy) last = 0;
  };
  function kick() { if (!raf) raf = requestAnimationFrame(step); }
  items.forEach(draw);
  new ResizeObserver(() => items.forEach(draw)).observe(list);
}

// Manifesto: rotating word, scroll-coloured paragraph, image trail and reel.
function splitWords(el) {
  const words = [];
  const walk = node => [...node.childNodes].forEach(n => {
    if (n.nodeType === 3) {
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(t => { if (!t) return; if (/^\s+$/.test(t)) frag.appendChild(document.createTextNode(t)); else { const w = document.createElement('span'); w.className = 'w'; w.textContent = t; frag.appendChild(w); words.push(w); } });
      n.replaceWith(frag);
    } else if (n.nodeType === 1) walk(n);
  });
  walk(el); return words;
}
function statements() {
  // 1 · the word after "resisten el" cycles: it rises out of view, blurred, while the next rises into place
  app.querySelectorAll('.rot').forEach(rot => {
    const words = rot.dataset.words.split('|');
    rot.innerHTML = words.map((w, i) => `<span class="rot-w${i ? '' : ' in'}">${w}</span>`).join('');
    const els = [...rot.children]; let i = 0;
    const fit = () => { rot.style.width = els[i].offsetWidth + 'px'; };
    fit(); document.fonts && document.fonts.ready.then(fit);
    if (reduce) return;
    const id = setInterval(() => {
      if (!rot.isConnected) return clearInterval(id);
      const r = rot.getBoundingClientRect(); if (document.hidden || r.bottom < 0 || r.top > innerHeight) return;
      const a = els[i]; i = (i + 1) % els.length; const b = els[i];
      a.classList.remove('in'); a.classList.add('out'); b.classList.remove('out'); b.classList.add('in'); fit();
      setTimeout(() => a.classList.remove('out'), 800);
    }, 2600);
  });
  // 2 · paragraph colour follows the scroll: read words turn ink, the leading edge glows orange, the rest waits in grey
  const G = [207, 202, 196], L = [244, 192, 166], A = [232, 120, 74], K = [15, 14, 13], mix = (a, b, t) => a.map((v, j) => Math.round(v + (b[j] - v) * t));
  app.querySelectorAll('.fill-text').forEach(el => {
    const words = splitWords(el), dark = el.classList.contains('on-dark'), g0 = dark ? [61, 56, 51] : G, k0 = dark ? [255, 255, 255] : K;
    const paint = p => { const k = p * (words.length + 4); words.forEach((w, i) => { const t = k - i; const c = t <= 0 ? g0 : t < 1.2 ? mix(g0, L, t / 1.2) : t < 2.4 ? mix(L, A, (t - 1.2) / 1.2) : t < 4 ? mix(A, k0, (t - 2.4) / 1.6) : k0, cs = `rgb(${c})`; if (w._c !== cs) { w._c = cs; w.style.color = cs; } }); };
    if (reduce) { paint(1); return; }
    if (el.closest('.obra')) { el._fill = paint; paint(0); return; }
    const f = () => { const r = el.getBoundingClientRect(), vh = innerHeight; paint(Math.min(1, Math.max(0, (vh * .9 - r.top) / (vh * .55 + r.height)))); };
    scrollFns.add(f); f();
  });
  // 3 · image trail: moving the mouse across the manifesto leaves photographs behind, so the pointer never feels alone
  const zone = document.getElementById('mani');
  if (zone && matchMedia('(pointer: fine)').matches && !reduce) {
    const pics = Object.keys(CR); let n = 0, lx = null, ly = null, acc = 0;
    let warm = false; zone.addEventListener('pointerenter', () => { if (warm) return; warm = true; pics.forEach(k => { new Image().src = `/fotos/t/${k}.jpg`; }); });
    zone.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse' || e.target.closest('.reel')) return;
      const r = zone.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      if (lx === null) { lx = x; ly = y; return; }
      acc += Math.hypot(x - lx, y - ly); lx = x; ly = y; if (acc < 120) return; acc = 0;
      const im = document.createElement('img'); im.src = `/fotos/t/${pics[n++ % pics.length]}.jpg`; im.alt = ''; im.className = 'trail';
      im.style.left = x + 'px'; im.style.top = y + 'px'; im.style.setProperty('--rot', (Math.random() * 8 - 4).toFixed(1) + 'deg');
      zone.appendChild(im); setTimeout(() => im.classList.add('gone'), 650); setTimeout(() => im.remove(), 1300);
      const all = zone.querySelectorAll('.trail'); if (all.length > 9) all[0].remove();
    });
    zone.addEventListener('pointerleave', () => { lx = null; });
  }
  // 4 · reel
  const ro = document.getElementById('reel-open'); if (ro) ro.onclick = () => Reel.open(ro);
}

// Reel: a full-screen run through the photographs. Opens out of its thumbnail and closes back into it.
const Reel = (() => {
  const box = document.getElementById('reelbox'), stage = box.querySelector('.rb-stage'), cap = box.querySelector('.rb-cap .t'), num = box.querySelector('.rb-n .t'), bar = box.querySelector('.rb-top i'), keys = Object.keys(CR), DUR = 4000;
  let i = 0, el = 0, prev = 0, raf = 0, paused = false, from = null;
  const clipFrom = r => `inset(${r.top}px ${innerWidth - r.right}px ${innerHeight - r.bottom}px ${r.left}px round 0 22px 22px 0)`;
  const show = n => {
    i = (n + keys.length) % keys.length; el = 0;
    const d = document.createElement('div'); d.className = 'rb-s'; d.innerHTML = `<img src="/fotos/${keys[i]}.jpg" alt="">`; d.style.setProperty('--kx', (i % 2 ? 2 : -2) + '%');
    stage.appendChild(d); requestAnimationFrame(() => requestAnimationFrame(() => d.classList.add('on')));
    [...stage.children].slice(0, -1).forEach(o => { o.classList.remove('on'); setTimeout(() => o.remove(), 1000); });
    cap.textContent = credit(keys[i]); num.textContent = `${String(i + 1).padStart(2, '0')} / ${keys.length}`;
    new Image().src = `/fotos/${keys[(i + 1) % keys.length]}.jpg`;
  };
  const loop = t => { if (box.hidden) return; const dt = prev ? t - prev : 0; prev = t; if (!paused) el += dt; if (el >= DUR) show(i + 1); bar.style.transform = `scaleX(${Math.min(1, (i + el / DUR) / keys.length).toFixed(4)})`; raf = requestAnimationFrame(loop); };
  const key = e => { if (e.key === 'Escape') close(); else if (e.key === 'ArrowRight') show(i + 1); else if (e.key === 'ArrowLeft') show(i - 1); else if (e.key === ' ') { e.preventDefault(); paused = !paused; } else if (e.key === 'Tab') { e.preventDefault(); box.querySelector('.rb-x').focus(); } };
  function open(btn) {
    from = btn; box.hidden = false; box.style.clipPath = reduce ? 'none' : clipFrom(btn.getBoundingClientRect());
    void box.offsetWidth; if (!reduce) box.style.clipPath = 'inset(0 0 0 0 round 0)';
    document.documentElement.style.overflow = 'hidden'; stage.innerHTML = ''; paused = false; prev = 0; show(0);
    raf = requestAnimationFrame(loop); addEventListener('keydown', key); box.querySelector('.rb-x').focus();
  }
  function close() {
    removeEventListener('keydown', key);
    if (!reduce && from) box.style.clipPath = clipFrom(from.getBoundingClientRect());
    setTimeout(() => { box.hidden = true; stage.innerHTML = ''; cancelAnimationFrame(raf); }, reduce ? 0 : 600);
    document.documentElement.style.overflow = ''; from && from.focus();
  }
  box.querySelector('.rb-x').onclick = close;
  stage.onclick = e => show(e.clientX > innerWidth / 2 ? i + 1 : i - 1);
  return {open};
})();

// Services: while the section is pinned, vertical scroll drives the track sideways.
function hscroll() {
  const sec = document.getElementById('hs'); if (!sec) return;
  const track = sec.querySelector('.hs-track'), bar = sec.querySelector('.hs-bar i'), desk = matchMedia('(min-width: 861px)');
  let dist = 0, ticks = [];
  function mark() {
    ticks.forEach(t => t.remove()); ticks = []; if (!dist) return;
    const n = track.querySelectorAll('.hs-card:not(.hs-end)').length;
    for (let i = 1; i < n; i++) { const t = document.createElement('b'), q = i / n; t.className = 'tk'; t.style.left = (q * 100).toFixed(2) + '%'; t._p = q; bar.parentElement.appendChild(t); ticks.push(t); }
  }
  const size = () => { if (!desk.matches || reduce) { sec.style.height = ''; track.style.transform = ''; dist = 0; return; } dist = Math.max(0, track.getBoundingClientRect().width - innerWidth); sec.style.height = (dist + innerHeight) + 'px'; mark(); };
  const f = resized => { if (resized === true) size(); if (!dist) return; const r = sec.getBoundingClientRect(), p = Math.min(1, Math.max(0, -r.top / (sec.offsetHeight - innerHeight))); track.style.transform = `translate3d(${(-p * dist).toFixed(1)}px,0,0)`; bar.style.transform = `scaleX(${p.toFixed(4)})`; ticks.forEach(t => t.classList.toggle('on', p >= t._p)); };
  size(); scrollFns.add(f); f();
  const pin = sec.querySelector('.hs-pin');
  pin.addEventListener('scroll', () => { if (pin.scrollLeft) pin.scrollLeft = 0; });
  track.addEventListener('focusin', e => {
    const card = e.target.closest('.hs-card'); if (!card || !dist) return;
    const want = Math.min(dist, Math.max(0, card.getBoundingClientRect().left - track.getBoundingClientRect().left - innerWidth * .08));
    window.scrollTo(0, sec.getBoundingClientRect().top + scrollY + want / dist * (sec.offsetHeight - innerHeight)); f();
  });
}

// Data columns (after moto-card): two columns drift past the statement at different speeds. The company's own figures are
// large, orange and nearly sharp; small design data sits between them, grey and soft, so the numbers never get lost.
function countUp() {
  const box = document.querySelector('#datos .dt-stats'); if (!box || reduce || !('IntersectionObserver' in window)) return;
  const bs = [...box.querySelectorAll('b:not(.yr)')].map(b => { const m = b.textContent.match(/^([\d.,]+)(.*)$/); if (!m) return null; const dec = m[1].includes(',') ? 1 : 0; b.style.minWidth = b.offsetWidth + 'px'; return {b, v: parseFloat(m[1].replace('.', '').replace(',', '.')), dec, suf: m[2], txt: b.textContent}; }).filter(Boolean);
  bs.forEach(o => { o.b.textContent = (0).toLocaleString('es-CO', {minimumFractionDigits: o.dec}) + o.suf; });
  new IntersectionObserver((es, ob) => {
    if (!es[0].isIntersecting) return; ob.disconnect(); const t0 = performance.now();
    const step = now => { const t = Math.min(1, (now - t0) / 1100), e = 1 - Math.pow(1 - t, 4);
      bs.forEach(o => { o.b.textContent = t >= 1 ? o.txt : (o.v * e).toLocaleString('es-CO', {minimumFractionDigits: o.dec, maximumFractionDigits: o.dec}) + o.suf; });
      if (t < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, {threshold: .6}).observe(box);
}
function dataColumns() {
  const sec = document.getElementById('datos'); if (!sec) return;
  const box = sec.querySelector('.dt-cols');
  // the clients' logos, alternating between the two columns
  const COLS = [{x: .14, side: -1, sp: .7, items: CLI.filter((c, i) => i % 2 === 0)}, {x: .86, side: 1, sp: .86, items: CLI.filter((c, i) => i % 2 === 1)}];
  const GAP = 118, items = [];
  COLS.forEach(c => { const list = c.items.concat(c.items, c.items); list.forEach(([n, f, h], i) => { const e = document.createElement('span'); e.className = 'dt-i lg';
    e.innerHTML = `<img src="/clientes/color/${f}" alt="" style="height:${h}px" decoding="async">`; box.appendChild(e); items.push({e, c, i, n: list.length, co: true, vis: true}); }); });
  const render = p => {
    const W = box.clientWidth, H = box.clientHeight, mid = H / 2;
    for (const it of items) {
      const total = it.n * GAP; let y = it.i * GAP - p * total * it.c.sp * .85 + (it.c.side > 0 ? GAP / 2 : 0);
      y = ((y % total) + total) % total - total / 2 + mid;
      const show = y > -60 && y < H + 60; if (show !== it.vis) { it.vis = show; it.e.style.visibility = show ? '' : 'hidden'; } if (!show) continue;
      const yn = Math.max(-1, Math.min(1, (y - mid) / (H * .62))), a = 1 - Math.abs(yn);
      const xx = it.c.x * W - (it.co ? 0 : it.c.side * a * a * W * .015);
      const tf = `translate(${xx.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,-50%) scale(${(.88 + a * .16).toFixed(3)})`, op = (it.co ? .28 + .72 * a * a : .08 + .5 * a * a).toFixed(2), bl = `blur(${(Math.round((1 - a) * (it.co ? 2.4 : 6) * 2) / 2).toFixed(1)}px)`;
      if (it.tf !== tf) { it.tf = tf; it.e.style.transform = tf; } if (it.op !== op) { it.op = op; it.e.style.opacity = op; } if (it.bl !== bl) { it.bl = bl; it.e.style.filter = bl; }
    }
  };
  if (reduce) { sec.style.height = 'auto'; sec.querySelector('.dt-pin').style.position = 'static'; render(.35); return; }
  let tgt = 0, cur = 0, raf = 0;
  const loop = () => { cur += (tgt - cur) * .12; if (Math.abs(tgt - cur) < .0003) cur = tgt; render(cur); raf = cur !== tgt ? requestAnimationFrame(loop) : 0; };
  // nothing to do while the columns are hidden (phones) or the section is off screen
  const f = resized => { if (!box.clientWidth) return; const r = sec.getBoundingClientRect(); if (r.bottom < -innerHeight || r.top > innerHeight * 2) return; const span = sec.offsetHeight - innerHeight; tgt = Math.min(1, Math.max(0, (-r.top + innerHeight) / (span + innerHeight))); if (resized === true) render(cur); if (!raf) raf = requestAnimationFrame(loop); };
  render(0); scrollFns.add(f); f();
}

// "Por dónde empezar": a row you can grab and throw. It keeps its momentum, resists gently at the ends, and the cards lean
// into the motion. Links still work with a plain click; a drag never triggers them.
function mzDrag() {
  const wrap = document.getElementById('mzw'), track = document.getElementById('mz'); if (!wrap || !matchMedia('(pointer: fine)').matches) return;
  const cards = [...track.children];
  const sup = ['l', 'r'].map(side => { const e = document.createElement('span'); e.className = 'mz-sup ' + side; e.setAttribute('aria-hidden', 'true'); e.innerHTML = '<svg viewBox="0 0 28 24"><path d="M14 3L25 17H3Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M1 20.5H27M5 24l3.5-3.5M11 24l3.5-3.5M17 24l3.5-3.5M23 24l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1"/></svg>'; wrap.appendChild(e); return e; });
  const vis = cards[0] && cards[0].querySelector('.mz-vis'); if (vis) wrap.style.setProperty('--sup-y', (vis.offsetHeight / 2) + 'px');
  let x = 0, v = 0, down = false, moved = false, sx = 0, sx0 = 0, last = 0, lastT = 0, raf = 0, lean = 0, id = null;
  const max = () => Math.min(0, wrap.clientWidth - track.scrollWidth - parseFloat(getComputedStyle(wrap).paddingLeft) * 2);
  const apply = () => { const oL = Math.max(0, x), oR = Math.max(0, max() - x); sup[0].style.opacity = Math.min(1, oL / 26).toFixed(2); sup[1].style.opacity = Math.min(1, oR / 26).toFixed(2); sup[0].style.transform = `translate(${(Math.min(oL, 60) * .3 - 6).toFixed(1)}px,-50%) rotate(90deg)`; sup[1].style.transform = `translate(${(6 - Math.min(oR, 60) * .3).toFixed(1)}px,-50%) rotate(-90deg)`; track.style.transform = `translate3d(${x.toFixed(1)}px,0,0)`; lean += (Math.max(-9, Math.min(9, -v * .5)) - lean) * .2; cards.forEach(c => { c.style.transform = `perspective(1100px) rotateY(${lean.toFixed(2)}deg)`; }); };
  const glide = () => {
    if (!down) { x += v; v *= .94; const m = max(); if (x > 0) { x += -x * .18; v *= .6; } else if (x < m) { x += (m - x) * .18; v *= .6; } }
    apply(); raf = (down || Math.abs(v) > .08 || Math.abs(lean) > .05 || x > .5 || x < max() - .5) ? requestAnimationFrame(glide) : 0;
  };
  wrap.addEventListener('pointerdown', e => { if (e.button !== 0 || e.pointerType !== 'mouse') return; down = true; moved = false; sx = last = e.clientX; sx0 = x; v = 0; lastT = performance.now(); id = e.pointerId; if (!raf) raf = requestAnimationFrame(glide); });
  wrap.addEventListener('pointermove', e => {
    if (!down) return; const dx = e.clientX - sx;
    if (!moved && Math.abs(dx) > 6) { moved = true; wrap.setPointerCapture(id); wrap.classList.add('dragging'); }
    if (!moved) return;
    let nx = sx0 + dx; const m = max(); if (nx > 0) nx *= .35; else if (nx < m) nx = m + (nx - m) * .35;
    const now = performance.now(); v = (e.clientX - last) * 16 / Math.max(8, now - lastT); last = e.clientX; lastT = now; x = nx;
  });
  const up = () => { if (!down) return; down = false; wrap.classList.remove('dragging'); if (!raf) raf = requestAnimationFrame(glide); };
  wrap.addEventListener('pointerup', up); wrap.addEventListener('pointercancel', up);
  wrap.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  wrap.addEventListener('wheel', e => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) { e.preventDefault(); v = -e.deltaX * .35; if (!raf) raf = requestAnimationFrame(glide); } }, {passive: false});
  track.querySelectorAll('img').forEach(i => { i.draggable = false; });
  wrap.addEventListener('scroll', () => { if (wrap.scrollLeft) wrap.scrollLeft = 0; });
  wrap.addEventListener('focusin', e => {
    const card = e.target.closest('.mz-card'); if (!card) return;
    const pad = parseFloat(getComputedStyle(wrap).paddingLeft), view = wrap.clientWidth - pad * 2, l = card.getBoundingClientRect().left - track.getBoundingClientRect().left, rr = l + card.offsetWidth;
    if (l + x < 0) x = -l; else if (rr + x > view) x = view - rr;
    x = Math.min(0, Math.max(max(), x)); v = 0; apply(); if (!raf) raf = requestAnimationFrame(glide);
  });
}

// El logo en obra, behind the closing statement. While the words fill in, the logo's structure glows into place —
// light rather than lines. Then the letters pour in as liquid: a bulbous head leads each stroke with a droplet just ahead of it,
// and a gooey filter lets them swell, touch and merge. At the end the liquid settles into the crisp logo.

// Behind the firm's statement the mark builds itself as the section scrolls: a truss traced along the letters (chords, web
// members, orange nodes), the mark poured along it, then the solid mark, faint, like the watermark of a drawing
function obra() {
  const sec = document.getElementById('datos'), host = sec && sec.querySelector('.dt-mark'); if (!host) return;
  const svg = host.querySelector('#obra-svg'), NS = 'http://www.w3.org/2000/svg';
  const CL = ['M0 51H280A250.5 250.5 0 0 1 280 552H0', 'M600 51H835A250.5 250.5 0 0 1 835 552H600', 'M1610 51H1395A250.5 250.5 0 0 0 1395 552H1610', 'M1741 291A240 240 0 0 1 1981 51H2000', 'M1952 291A261 261 0 0 1 1691 552', 'M1170 298H1565'];
  const DRAW = ['M1691 552A261 261 0 0 0 1952 291', 'M1741 291A240 240 0 0 1 1981 51H2000', 'M1565 298H1170', 'M1610 552H1395A250.5 250.5 0 0 1 1395 51H1610', 'M600 552H835A250.5 250.5 0 0 0 835 51H600', 'M0 552H280A250.5 250.5 0 0 0 280 51H0'];
  const mk = (tag, at, parent) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); (parent || svg).appendChild(e); return e; };
  svg.innerHTML = '';
  const defs = mk('defs', {}), tmp = mk('path', {}, defs);
  const glow = mk('filter', {id: 'o-glow', x: -200, y: -200, width: 2500, height: 1100, filterUnits: 'userSpaceOnUse', 'color-interpolation-filters': 'sRGB'}, defs);
  mk('feGaussianBlur', {in: 'SourceGraphic', stdDeviation: 8, result: 'a'}, glow); mk('feGaussianBlur', {in: 'SourceGraphic', stdDeviation: 26, result: 'b'}, glow);
  const gm = mk('feMerge', {}, glow); ['b', 'b', 'a'].forEach(r => mk('feMergeNode', {in: r}, gm));
  const goo = mk('filter', {id: 'o-goo', x: -200, y: -200, width: 2500, height: 1100, filterUnits: 'userSpaceOnUse', 'color-interpolation-filters': 'sRGB'}, defs);
  mk('feGaussianBlur', {in: 'SourceGraphic', stdDeviation: 16, result: 'b'}, goo); mk('feColorMatrix', {in: 'b', type: 'matrix', values: '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10'}, goo);
  const gTruss = mk('g', {class: 'o-truss', filter: 'url(#o-glow)'}), ground = mk('path', {d: 'M2040 603H-40', pathLength: 1, class: 'o-ground'}, gTruss), gBeam = mk('g', {}, gTruss), gDot = mk('g', {}, gTruss);
  const gCrisp = mk('g', {class: 'o-crisp'}), gGoo = mk('g', {filter: 'url(#o-goo)'});
  const W = 2000, H = 603, score = (x, y) => ((W - x) / W) * .72 + ((H - y) / H) * .28;
  const P = v => v[0].toFixed(1) + ' ' + v[1].toFixed(1), beams = [], dots = [];
  const GAP = 16, member = (a0, b0, kind) => { const L = Math.hypot(b0[0] - a0[0], b0[1] - a0[1]); if (L < GAP * 2 + 6) return; const ux = (b0[0] - a0[0]) / L, uy = (b0[1] - a0[1]) / L;
    const a = [a0[0] + ux * GAP, a0[1] + uy * GAP], b = [b0[0] - ux * GAP, b0[1] - uy * GAP];   // each member stops short of its nodes
    const [s0, s1] = [score(...a), score(...b)], [u, v] = s0 <= s1 ? [a, b] : [b, a]; beams.push({e: mk('path', {d: `M${P(u)}L${P(v)}`, pathLength: 1, class: 'o-b ' + kind}, gBeam), s: Math.min(s0, s1)}); };
  CL.forEach(d => {
    tmp.setAttribute('d', d);
    const Ln = tmp.getTotalLength(), n = Math.max(2, Math.round(Ln / 82)), hw = 54, O = [], I = [];
    for (let k = 0; k <= n; k++) {
      const sL = Ln * k / n, pt = tmp.getPointAtLength(sL), a = tmp.getPointAtLength(Math.max(0, sL - .6)), b = tmp.getPointAtLength(Math.min(Ln, sL + .6));
      let tx = b.x - a.x, ty = b.y - a.y; const m = Math.hypot(tx, ty) || 1; tx /= m; ty /= m;
      O.push([pt.x - ty * hw, pt.y + tx * hw]); I.push([pt.x + ty * hw, pt.y - tx * hw]);
    }
    for (let k = 0; k < n; k++) { member(O[k], O[k + 1], 'ch'); member(I[k], I[k + 1], 'ch'); member(k % 2 ? O[k] : I[k], k % 2 ? I[k + 1] : O[k + 1], 'wb'); }
    for (let k = 0; k <= n; k++) member(I[k], O[k], 'wb');
    O.concat(I).forEach(v => dots.push({e: mk('circle', {cx: v[0].toFixed(1), cy: v[1].toFixed(1), r: 9, class: 'o-d'}, gDot), s: score(...v)}));
  });
  tmp.remove();
  const logo = DRAW.map(d => { const e = mk('path', {d, pathLength: 1, class: 'o-logo'}, gGoo); return {e, L: e.getTotalLength(), head: mk('circle', {r: 0, class: 'o-drop'}, gGoo), lead: mk('circle', {r: 0, class: 'o-drop'}, gGoo)}; });
  CL.slice(0, 5).forEach(d => mk('path', {d}, gCrisp)); mk('rect', {x: 1170, y: 246, width: 395, height: 104}, gCrisp);
  const drops = [86, 52, 30].map(R => ({R, el: mk('circle', {r: 0, class: 'o-drop'}, gGoo)})); let hov = 0;
  const seg = (p, a, b) => Math.min(1, Math.max(0, (p - a) / (b - a))), out = t => 1 - Math.pow(1 - t, 3), io = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  // Each frame writes only what changed: most of the truss is either fully drawn or not yet started, and rewriting
  // hundreds of unchanged values (or a drop's radius that is already 0) still costs a style pass and re-runs the goo filter
  const sty = (e, k, v) => { if (e['_' + k] !== v) { e['_' + k] = v; e.style[k] = v; } }, att = (e, k, v) => { if (e['_' + k] !== v) { e['_' + k] = v; e.setAttribute(k, v); } };
  const txt = sec.querySelector('.fill-text');
  const render = (p, now) => {
    const t = (now || 0) / 1000;
    sty(ground, 'strokeDashoffset', (1 - out(seg(p, 0, .12))).toFixed(4));
    for (const b of beams) { const st = .02 + b.s * .4; sty(b.e, 'strokeDashoffset', (1 - out(seg(p, st, st + .14))).toFixed(3)); }
    for (const d of dots) { const on = p > .1 + d.s * .4; if (d.on !== on) { d.on = on; d.e.classList.toggle('on', on); } }
    sty(gTruss, 'opacity', (.95 * (1 - seg(p, .56, .84))).toFixed(3));
    sty(svg, 'opacity', (.5 + .5 * seg(p, .05, .45)).toFixed(3));
    logo.forEach((o, i) => {
      const st = .5 + i * .05, q = io(seg(p, st, st + .24));
      sty(o.e, 'strokeDashoffset', (1 - q).toFixed(4));
      if (q > .002 && q < .998) {
        const h = o.e.getPointAtLength(q * o.L), l = o.e.getPointAtLength(Math.min(o.L, q * o.L + 72 + 28 * Math.sin(t * 5.2 + i)));
        att(o.head, 'cx', h.x.toFixed(1)); att(o.head, 'cy', h.y.toFixed(1)); att(o.head, 'r', (60 + 8 * Math.sin(t * 6 + i * 1.3)).toFixed(1));
        att(o.lead, 'cx', l.x.toFixed(1)); att(o.lead, 'cy', l.y.toFixed(1)); att(o.lead, 'r', (q * o.L + 60 < o.L ? 26 + 10 * Math.sin(t * 7.3 + i * 2.1) : 0).toFixed(1));
      } else { att(o.head, 'r', '0'); att(o.lead, 'r', '0'); }
    });
    // The crisp logo appears under the liquid, then the liquid thins away; afterwards it only returns under the pointer
    const fin = seg(p, .84, .9), melt = seg(p, .9, .97); sty(gCrisp, 'opacity', fin.toFixed(3)); sty(gGoo, 'opacity', Math.max(1 - melt, hov).toFixed(3));
    if (txt && txt._fill) txt._fill(seg(p, 0, .48));
  };
  if (reduce) { render(1, 0); return; }
  let tgt = 0, cur = 0, raf = 0;
  const loop = now => { cur += (tgt - cur) * .2; if (Math.abs(tgt - cur) < .0004) cur = tgt; render(cur, now); const pouring = cur > .5 && cur < .96 && Math.abs(tgt - cur) < .5; raf = cur !== tgt || pouring ? requestAnimationFrame(loop) : 0; };
  // pinned (desktop): complete a little before the section lets go; unpinned (phones): as it crosses the screen
  const f = () => { const r = sec.getBoundingClientRect(), span = sec.offsetHeight - innerHeight;
    tgt = Math.min(1, Math.max(0, span > innerHeight * .3 ? -r.top / (span * .8) : (innerHeight * .95 - r.top) / (innerHeight * .9)));
    if (r.bottom < 0 || r.top > innerHeight) return; if (!raf) raf = requestAnimationFrame(loop); };
  render(0, 0); scrollFns.add(f); f();
  liquidPointer(svg, host, drops, k => { hov = k; sty(gGoo, 'opacity', Math.max(1 - seg(cur, .9, .97), k).toFixed(3)); }, () => cur > .96);
}

// The wordmark that closes every page: the same liquid as the pour in "Así se construye". The crisp logo stays underneath;
// the liquid copy on top only shows where the drop is, so the letters keep their corners.
(() => {
  const svg = document.getElementById('f-mark'); if (!svg) return;
  svg.innerHTML = '<defs><filter id="f-goo" x="-120" y="-120" width="2240" height="843" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="17"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 24 -10"/></filter></defs><g class="lq-crisp"><use href="#ddes" width="2000" height="603"/></g><g class="lq-goo" filter="url(#f-goo)"><use href="#ddes" width="2000" height="603"/><circle class="lq-d" r="0"/><circle class="lq-d" r="0"/><circle class="lq-d" r="0"/></g>';
  const goo = svg.querySelector('.lq-goo'), drops = [...svg.querySelectorAll('.lq-d')].map((el, i) => ({el, R: [96, 58, 34][i]}));
  liquidPointer(svg, svg.parentElement, drops, k => { goo.style.opacity = k.toFixed(3); });
})();

// A drop of the logo's own liquid follows the pointer, trailed by two smaller ones. Near a letter it swells into it and pulls
// a neck, like the pour; moving fast, the trail separates and runs back together.
function liquidPointer(svg, host, drops, onAmt, enabled = () => true) {
  if (reduce || !host) return;
  const pt = svg.createSVGPoint(), st = drops.map(() => ({x: 0, y: 0, r: 0}));
  let tx = 0, ty = 0, on = false, raf = 0, amt = 0, tm = 0;
  const at = e => { pt.x = e.clientX; pt.y = e.clientY; const m = svg.getScreenCTM(); return m && pt.matrixTransform(m.inverse()); };
  const move = e => { const q = at(e); if (!q) return; tx = q.x; ty = q.y; const was = on; on = enabled(); if (on && !was) st.forEach(s => { s.x = tx; s.y = ty; }); kick(); };
  host.addEventListener('pointermove', move, {passive: true});
  host.addEventListener('pointerdown', e => { move(e); if (e.pointerType !== 'mouse') { clearTimeout(tm); tm = setTimeout(() => { on = false; kick(); }, 900); } });
  host.addEventListener('pointerleave', () => { on = false; kick(); });
  const loop = () => {
    raf = 0; let busy = false;
    st.forEach((s, i) => {
      const lead = i ? st[i - 1] : {x: tx, y: ty}, k = [.32, .2, .14][i] || .12, R = on ? drops[i].R : 0;
      s.x += (lead.x - s.x) * k; s.y += (lead.y - s.y) * k; s.r += (R - s.r) * .13;
      const d = drops[i].el; d.setAttribute('cx', s.x.toFixed(1)); d.setAttribute('cy', s.y.toFixed(1)); d.setAttribute('r', Math.max(0, s.r).toFixed(1));
      if (Math.abs(lead.x - s.x) + Math.abs(lead.y - s.y) > .6 || Math.abs(R - s.r) > .4) busy = true;
    });
    const want = on ? 1 : 0; amt += (want - amt) * .12; if (Math.abs(want - amt) > .004) busy = true; else amt = want;
    onAmt(amt);
    if (busy) raf = requestAnimationFrame(loop);
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
}

// ============ Liquid glass for the control layer ============ (see the CSS note on .g)
// Chromium bends whatever is behind the glass with an SVG filter used as backdrop-filter. For capsules the filter is assembled
// from pieces, two round ends and a middle that stretches, so a capsule can change width every frame without recomputing
// anything; a second set of pieces forms the travelling lens, which magnifies what is behind it.
const UI = (() => {
  const NS = 'http://www.w3.org/2000/svg', defs = document.getElementById('lg-defs'), live = new Set(), maps = new Map();
  const REFRACT = /Chrome\//.test(navigator.userAgent);
  let px = -1e5, py = -1e5, raf = 0, uid = 0, lastInput = 0;
  const put = (D, i, v) => { D[i] = 128 + v[0] * 127; D[i + 1] = 128 + v[1] * 127; D[i + 2] = 128; D[i + 3] = 255; };
  const paint = (w, h, fn, band = 1e9, later = false) => { const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'), img = g.createImageData(w, h), D = img.data;
    new Uint32Array(D.buffer).fill(0xff808080);
    for (let y = 0; y < h; y++) { const edge = y < band || y >= h - band, x1 = edge ? w : Math.min(w, band), x2 = edge ? w : Math.max(x1, w - band);
      for (let x = 0; x < x1; x++) put(D, (y * w + x) * 4, fn(x + .5, y + .5));
      for (let x = x2; x < w; x++) put(D, (y * w + x) * 4, fn(x + .5, y + .5)); }
    g.putImageData(img, 0, 0); return later ? c : c.toDataURL(); };
  // Rim: across a convex bevel of width b the backdrop is sampled from further in, most at the very edge (the thick rim of a
  // lens compresses what is behind it); c adds a faint pull toward the middle over radius r, which magnifies it slightly.
  const rim = (d, nx, ny, b, c = 0, r = 1, pw = 1.7) => { if (d >= 0) return [0, 0]; const t = -d, m = Math.min(1, (t < b ? Math.pow(1 - t / b, pw) : 0) + c * Math.max(0, 1 - t / r)); return [-nx * m, -ny * m]; };
  // Lens: a magnifier, strongest halfway between its centre line and its edge.
  const mag = (d, nx, ny, r) => { if (d >= 0) return [0, 0]; const m = Math.sin(Math.PI * (1 + d / r)) * .42; return [-nx * m, -ny * m]; };
  function capsule(h, kind, bv = 0, pw = 1.7) {
    const key = kind + h + 'x' + bv + 'x' + pw; if (maps.has(key)) return maps.get(key);
    const r = h / 2, hw = Math.ceil(r), b = bv || Math.max(8, Math.min(28, h * .55)), f = kind === 'rim' ? (d, nx, ny) => rim(d, nx, ny, b, bv ? 0 : .08, r, pw) : (d, nx, ny) => mag(d, nx, ny, r);
    const end = cx => (x, y) => { const vx = x - cx, vy = y - r, l = Math.hypot(vx, vy) || 1; return f(l - r, vx / l, vy / l); };
    const out = {hw, b, L: paint(hw, h, end(r)), R: paint(hw, h, end(hw - r)), M: paint(1, h, (x, y) => { const vy = y - r; return f(Math.abs(vy) - r, 0, vy < 0 ? -1 : 1); })};
    maps.set(key, out); return out;
  }
  function rounded(w, h, R, bv = 0, pw = 1.7) {
    const key = `r${w}x${h}x${R}x${bv}x${pw}`; if (maps.has(key)) return maps.get(key);
    const b = bv || Math.max(10, Math.min(30, Math.min(w, h) * .3)), sdf = (x, y) => { const qx = Math.abs(x - w / 2) - w / 2 + R, qy = Math.abs(y - h / 2) - h / 2 + R; return Math.min(Math.max(qx, qy), 0) + Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) - R; };
    // Large maps (the menu sheets) are encoded in the background; the filter is assembled when the image is ready
    const big = w * h > 40000, out = {b, url: null, wait: []}, c = paint(w, h, (x, y) => { const d = sdf(x, y); if (d < -b) return [0, 0]; const nx = sdf(x + 1, y) - sdf(x - 1, y), ny = sdf(x, y + 1) - sdf(x, y - 1), l = Math.hypot(nx, ny) || 1; return rim(d, nx / l, ny / l, b, 0, 1, pw); }, Math.ceil(b) + 2, big);
    if (big && c.toBlob) c.toBlob(bl => { out.url = bl ? URL.createObjectURL(bl) : c.toDataURL(); out.wait.splice(0).forEach(f => f()); }); else out.url = big ? c.toDataURL() : c;
    maps.set(key, out); return out;
  }
  const piece = (cls, href, x, y, w, h, res) => `<feImage class="${cls}" href="${href}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="none" result="${res}"/>`;
  function build(st) {
    const {w, h, o} = st, id = 'ug' + (++uid), f = document.createElementNS(NS, 'filter');
    let map = '<feFlood flood-color="#808080" result="mid"/>', S;
    if (o.shape === 'sheet') { const m = rounded(w, h, o.radius, o.bevel, o.pw); if (!m.url) { m.wait.push(() => { if (st.w === w && st.h === h) build(st); }); return; } S = m.b * (o.gain || 1.6); map += piece('', m.url, 0, 0, w, h, 'map'); }
    else {
      const c = capsule(h, 'rim', o.bevel, o.pw); S = c.b * (o.gain || 2); st.hw = c.hw;
      map += piece('rL', c.L, 0, 0, c.hw, h, 'rl') + piece('rM', c.M, c.hw, 0, Math.max(1, w - 2 * c.hw), h, 'rm') + piece('rR', c.R, w - c.hw, 0, c.hw, h, 'rr') +
        `<feMerge result="${st.lens ? 'edge' : 'map'}"><feMergeNode in="mid"/><feMergeNode in="rl"/><feMergeNode in="rm"/><feMergeNode in="rr"/></feMerge>`;
      if (st.lens) {
        const lh = Math.max(8, h - 2 * st.lens.inset), l = capsule(lh, 'lens'), y = st.lens.inset; st.lhw = l.hw;
        map += piece('lL', l.L, -999, y, l.hw, lh, 'll') + piece('lM', l.M, -999, y, 1, lh, 'lm') + piece('lR', l.R, -999, y, l.hw, lh, 'lr') +
          '<feMerge result="lens"><feMergeNode in="mid"/><feMergeNode in="ll"/><feMergeNode in="lm"/><feMergeNode in="lr"/></feMerge><feComposite in="edge" in2="lens" operator="arithmetic" k2="1" k3="1" k4="-0.5" result="map"/>';
      }
    }
    const bend = o.disperse
      ? [1.12, 1, .88].map((k, i) => `<feDisplacementMap class="dp" in="soft" in2="map" scale="${(S * k).toFixed(1)}" xChannelSelector="R" yChannelSelector="G" result="d${i}"/>`).join('') +
        '<feColorMatrix in="d0" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="c0"/><feColorMatrix in="d1" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="c1"/><feColorMatrix in="d2" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="c2"/>' +
        '<feComposite in="c0" in2="c1" operator="arithmetic" k2="1" k3="1" result="c01"/><feComposite in="c01" in2="c2" operator="arithmetic" k2="1" k3="1" result="bent"/>'
      : `<feDisplacementMap in="soft" in2="map" scale="${S.toFixed(1)}" xChannelSelector="R" yChannelSelector="G" result="bent"/>`;
    f.innerHTML = map + `<feGaussianBlur in="SourceGraphic" stdDeviation="${o.blur}" result="soft"/>` + bend + `<feColorMatrix in="bent" type="saturate" values="${o.sat}" result="vivid"/><feComponentTransfer in="vivid"><feFuncR type="linear" slope="${o.bri}" intercept="${o.lift}"/><feFuncG type="linear" slope="${o.bri}" intercept="${o.lift}"/><feFuncB type="linear" slope="${o.bri}" intercept="${o.lift}"/></feComponentTransfer>`;
    [['id', id], ['x', 0], ['y', 0], ['width', w], ['height', h], ['filterUnits', 'userSpaceOnUse'], ['primitiveUnits', 'userSpaceOnUse'], ['color-interpolation-filters', 'sRGB']].forEach(([k, v]) => f.setAttribute(k, v));
    defs.appendChild(f); if (st.f) st.f.node.remove();
    const q = c => f.querySelector('.' + c);
    st.f = {id, node: f, S, dp: [...f.querySelectorAll('.dp')], rM: q('rM'), rR: q('rR'), lL: q('lL'), lM: q('lM'), lR: q('lR')};
    st.gl.style.backdropFilter = st.gl.style.webkitBackdropFilter = (o.pre ? o.pre + ' ' : '') + `url(#${id})`;
  }
  // When only the width of a capsule changes, only its middle stretches
  function stretch(st) { const f = st.f; if (!f || !f.rM) return build(st); f.node.setAttribute('width', st.w); f.rM.setAttribute('width', Math.max(1, st.w - 2 * st.hw)); f.rR.setAttribute('x', st.w - st.hw); }
  function size(st, W, H) {
    const w = Math.round(W == null ? st.el.offsetWidth : W), h = Math.round(H == null ? st.el.offsetHeight : H); if (!w || !h || (w === st.w && h === st.h)) return;
    const hc = h !== st.h; st.w = w; st.h = h; if (!REFRACT) return;
    // Sheets stay shut until asked for: their first map waits for an idle moment instead of the page load
    if (st.o.shape === 'sheet') { clearTimeout(st.t); if (st.f) st.t = setTimeout(() => build(st), 160); else if (!st.idle) { st.idle = 1; (window.requestIdleCallback || setTimeout)(() => { st.idle = 0; build(st); }, {timeout: 2000}); } }
    else if (hc || !st.f) build(st); else stretch(st);
  }
  const ro = 'ResizeObserver' in window ? new ResizeObserver(es => es.forEach(e => { const b = e.borderBoxSize && e.borderBoxSize[0]; e.target._g && (b ? size(e.target._g, b.inlineSize, b.blockSize) : size(e.target._g)); })) : null;
  function add(el, o = {}) {
    if (!el) return null; if (el._g) return el._g;
    let gl = el.querySelector(':scope > .gl'); if (!gl) { gl = document.createElement('span'); gl.className = 'gl'; gl.setAttribute('aria-hidden', 'true'); el.prepend(gl); }
    const st = el._g = {el, gl, o: Object.assign({blur: 4, sat: 1.8, bri: 1.05, lift: .02, shape: 'capsule', radius: 28}, o), w: 0, h: 0, lx: -.55, ly: -.83, near: 0, p: 0, down: false, lens: null};
    live.add(st); ro ? ro.observe(el) : size(st); kick(); return st;
  }
  function drop(st) { live.delete(st); ro && ro.unobserve(st.el); st.f && st.f.node.remove(); st.el._g = null; }
  function lens(el, pick, o = {}) {
    const st = add(el, o);
    st.lens = {L: el.querySelector('.lens'), pick, inset: o.inset || 4, l: 0, r: 0, vis: 0, init: false};
    if (REFRACT && st.f) build(st);
    kick(); return st;
  }
  // The lens moves its leading edge faster than its trailing edge, so it stretches while travelling and thins a little as it does
  function lensFrame(st, R, snap) {
    const s = st.lens, t = s.pick(); let busy = false, tw = 0;
    if (t) {
      const b = st.tgtR || t.getBoundingClientRect(), tl = b.left - R.left, tr = b.right - R.left; tw = b.width;
      if (!s.init || s.vis < .02 || snap) { s.l = tl; s.r = tr; s.init = true; if (snap) s.vis = 1; }
      const left = tl < s.l - .5, right = tl > s.l + .5;
      // the leading edge runs ahead of the trailing one (the liquid stretch); a tap's glide is well on its way within the ~0,07 s before its page change
      s.l += (tl - s.l) * (left ? .4 : .24); s.r += (tr - s.r) * (right ? .4 : .24);
      busy = Math.abs(tl - s.l) + Math.abs(tr - s.r) > .3;
    }
    s.vis += ((t ? 1 : 0) - s.vis) * .2; if (Math.abs((t ? 1 : 0) - s.vis) > .01) busy = true;
    const w = Math.max(0, s.r - s.l), str = t ? Math.min(1, Math.max(0, w - tw) / 70) : 0;
    s.L.style.width = w.toFixed(1) + 'px';
    s.L.style.transform = `translateX(${s.l.toFixed(1)}px) scale(${(1 - st.p * .03).toFixed(3)},${(1 - str * .14 - st.p * .06).toFixed(3)})`;
    s.L.style.opacity = s.vis.toFixed(3);
    const f = st.f; if (f && f.lL) { const x = s.vis > .05 ? s.l : -999, hw = st.lhw; f.lL.setAttribute('x', x.toFixed(1)); f.lM.setAttribute('x', (x + hw).toFixed(1)); f.lM.setAttribute('width', Math.max(1, w - 2 * hw).toFixed(1)); f.lR.setAttribute('x', (x + w - hw).toFixed(1)); }
    return busy;
  }
  function tick() {
    // during a page change nothing on the glass moves: the lenses were put in their final place at the capture (snap) and the
    // drop shows them there; measuring every glass each frame here kept the main thread busy for the whole animation
    raf = 0; if (navBusy) return void navBusy.then(kick);
    let busy = performance.now() - lastInput < 500;
    // With no pointer over the page (a phone), a glass that has settled at rest has nothing to follow and is not measured at all.
    // The rest are all measured first and written afterwards, so a frame lays the page out once, not once per glass.
    const far0 = px < -1e4, todo = [];
    for (const st of [...live]) {
      if (!st.el.isConnected) { drop(st); continue; }
      if (st.o.still) continue;
      if (far0 && !st.lens && !st.down && st.p < .005 && st.key === '-0.55,-0.83,0.00,0.00') continue;
      todo.push([st, st.el.getBoundingClientRect(), st.lens && st.lens.pick()]);
    }
    for (const [st, R, tgt] of todo) {
      st.tgtR = tgt ? tgt.getBoundingClientRect() : null;
    }
    for (const [st, R] of todo) {
      if (!R.width || R.bottom < -60 || R.top > innerHeight + 60) continue;
      const far = px < -1e4, near = far ? 0 : Math.max(0, 1 - Math.hypot(Math.max(R.left - px, 0, px - R.right), Math.max(R.top - py, 0, py - R.bottom)) / 220);
      const cx = R.left + R.width / 2, cy = R.top + R.height / 2, dx = px - cx, dy = py - cy, m = Math.hypot(dx, dy) || 1, reach = Math.min(1, m / 480), rest = far || near <= 0;
      const tx = rest ? -.55 : dx / m * reach - .55 * (1 - reach), ty = rest ? -.83 : dy / m * reach - .83 * (1 - reach), tl = Math.hypot(tx, ty) || 1;
      st.lx += (tx / tl - st.lx) * .14; st.ly += (ty / tl - st.ly) * .14; st.near += (near - st.near) * .14; st.p += ((st.down ? 1 : 0) - st.p) * .25;
      const vals = [st.lx.toFixed(2), st.ly.toFixed(2), st.near.toFixed(2), st.p.toFixed(2)], key = vals.join();
      if (key !== st.key) { st.key = key; const sty = st.el.style; sty.setProperty('--lx', vals[0]); sty.setProperty('--ly', vals[1]); sty.setProperty('--near', vals[2]); sty.setProperty('--prs', vals[3]); }
      if (Math.abs((st.down ? 1 : 0) - st.p) > .01) busy = true;
      if (st.lens && lensFrame(st, R)) busy = true;
    }
    if (busy) raf = requestAnimationFrame(tick);
  }
  function kick() { if (!raf) raf = requestAnimationFrame(tick); }
  addEventListener('pointermove', e => { px = e.clientX; py = e.clientY; lastInput = performance.now(); kick(); }, {passive: true});
  // Scrolling only moves the light when a mouse is over the page; with a finger there is nothing for the glass to follow
  addEventListener('scroll', () => { if (px > -1e4) { lastInput = performance.now(); kick(); } }, {passive: true});
  // a finger leaves no light behind: lifted, or taken over by the page's own scrolling (pointercancel)
  const lift = e => { if (e.pointerType !== 'mouse') px = py = -1e5; };
  addEventListener('pointerup', lift, {passive: true}); addEventListener('pointercancel', lift, {passive: true});
  addEventListener('pointerdown', e => { const g = e.target instanceof Element && e.target.closest('.g'); if (g && g._g) { g._g.down = true; kick(); } });
  const up = () => { live.forEach(st => { st.down = false; }); kick(); };
  addEventListener('pointerup', up); addEventListener('pointercancel', up);
  document.documentElement.addEventListener('mouseleave', () => { px = py = -1e5; kick(); });
  // Round glass for the cursor bubble
  function circle(d) { const st = {w: d, h: d, o: {shape: 'sheet', radius: d / 2, blur: .4, sat: 1.7, bri: 1.05, lift: .015, disperse: true, bevel: Math.round(d * .22), pw: 2, gain: 3}, gl: document.createElement('span')}; build(st); return st.f; }
  // At a page change's capture every lens takes its final place at once (the new page is revealed with it already there)
  function snap() { for (const st of live) if (st.lens && st.el.isConnected) { const R = st.el.getBoundingClientRect(); if (R.width) { st.tgtR = null; lensFrame(st, R, true); } } }
  return {add, lens, kick, circle, REFRACT, snap};
})();

// Navigation glass: the header capsule and its lens, the services sheet, the level label, the reel's controls,
// and on phones the tab bar with its round button and sheet.
(() => {
  let hover = null, focus = null;
  nav.addEventListener('pointerover', e => { const a = e.target.closest('.nav > a, .has-menu'); if (a) hover = a.matches('.has-menu') ? a.firstElementChild : a; UI.kick(); });
  nav.addEventListener('pointerleave', () => { hover = null; UI.kick(); });
  nav.addEventListener('focusin', e => { const a = e.target.closest('.nav > a, .has-menu > a'); focus = a && a.matches(':focus-visible') ? a : null; UI.kick(); });
  nav.addEventListener('focusout', () => { focus = null; UI.kick(); });
  UI.lens(nav, () => hover || focus || nav.querySelector(':scope > a[aria-current="page"], :scope > .has-menu > a[aria-current="page"]'), {blur: 4, sat: 1.9, bri: 1.06, disperse: true, bevel: 10, pw: 2.6, gain: 2.1});
  // After a page change, a menu still under the pointer stays shut until the pointer leaves it (on touch, until the next tap)
  const hm = nav.querySelector('.has-menu');
  hm.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') nav.classList.remove('mute'); });
  hm.addEventListener('pointerdown', () => nav.classList.remove('mute'));
  UI.add(nav.querySelector('.mega'), {shape: 'sheet', radius: 28, blur: 0, pre: 'blur(26px)', sat: 1.8, bri: 1.06, bevel: 18, pw: 2.6, gain: 2.1, still: true});
  document.querySelectorAll('#reelbox .g').forEach(el => UI.add(el, {blur: 2.5, sat: 1.8}));

  const bar = document.querySelector('.tabbar'), cap = bar.querySelector('.tb-cap'), row = bar.querySelector('.tb-row'), tabs = [...row.querySelectorAll('a')];
  const more = document.getElementById('tb-more'), sheet = document.getElementById('sheet'), mq = matchMedia('(max-width: 1060px)');
  const DARK = '.mani,.hero,.hhero,.hs,.obra,.band:not(.lite),.grow,.touch,.ley-band';
  sheet.querySelector('.sh-in').innerHTML = `<nav aria-label="Secciones">${[['inicio', 'Inicio', ''], ['nosotros', 'Nosotros', 'nosotros'], ['servicios', 'Servicios', 'servicios'], ['experiencia', 'Experiencia', 'experiencia'], ['perspectivas', 'Perspectivas', 'perspectivas'], ['contacto', 'Contacto', 'contacto']].map(([h, t, sec]) => `<a href="#${h}" data-sec="${sec}">${t}</a>`).join('')}</nav>
    <div class="sh-svc">${SVC.map(v => `<a href="#servicio-${v.id}">${v.name}</a>`).join('')}</div><a class="btn primary" href="#contacto">Pedir propuesta</a><p class="sh-note"><a href="https://wa.me/573002021920" target="_blank" rel="noopener">WhatsApp +57 300 202 1920</a> · <a href="mailto:gerencia@ddes.co">gerencia@ddes.co</a></p>`;
  let press = null, comp = 0, compT = 0, full = 0, lastSY = 0, craf = 0, tq = 0;
  const current = () => tabs.find(a => a.getAttribute('aria-current') === 'page');
  // a tab pressed: its lens glides there first, and the page change waits for it to land (see the hashchange handler)
  row.addEventListener('pointerdown', e => { press = e.target.closest('a'); tbGlide = performance.now() + 70; UI.kick(); });
  // a tap that leads to another page keeps the lens on its way there when the finger lifts; it would otherwise turn back to the
  // current tab for the moment before the page changes (the bounce). It lets go when the page changes, or after 1,2 s if not.
  let going = null, goingT = 0;
  addEventListener('pointerup', () => { if (press) { const a = press; press = null; if (hrefOf(a) !== here() && !(here() === '' && hrefOf(a) === '#inicio')) { going = a; clearTimeout(goingT); goingT = setTimeout(() => { going = null; UI.kick(); }, 1200); } UI.kick(); } });
  addEventListener('pointercancel', () => { if (press) { press = null; UI.kick(); } });
  UI.lens(cap, () => press || going || current(), {blur: 5, sat: 1.9, bri: 1.06, disperse: true, bevel: 12, pw: 2.6, gain: 2.1});
  UI.add(more, {blur: 5, sat: 1.9, bri: 1.06, disperse: true, bevel: 12, pw: 2.6, gain: 2.1});
  UI.add(sheet, {shape: 'sheet', radius: 30, blur: 0, pre: 'blur(22px)', sat: 1.9, bri: 1.06, bevel: 18, pw: 2.6, gain: 2.1, still: true});
  // Reading: the bar contracts to the current tab. The row keeps its full width and slides, so the labels never squeeze.
  const squeeze = () => {
    craf = 0; if (comp === 0 && compT === 0) { if (row.style.width) { cap.style.flex = ''; row.style.width = ''; row.style.transform = ''; tabs.forEach(t => { t.style.opacity = ''; }); } return; }
    if (comp === 0) full = cap.offsetWidth;
    comp += (compT - comp) * .16; if (Math.abs(compT - comp) < .003) comp = compT;
    const a = current() || tabs[0];
    if (comp > 0 && full) {
      cap.style.flex = `0 0 ${(full - (full - (a.offsetWidth + 8)) * comp).toFixed(1)}px`; row.style.width = full + 'px';
      row.style.transform = `translateX(${(-(a.offsetLeft - 4) * comp).toFixed(1)}px)`;
      tabs.forEach(t => { t.style.opacity = t === a ? '' : Math.max(0, 1 - comp * 1.4).toFixed(3); });
    } else { cap.style.flex = ''; row.style.width = ''; row.style.transform = ''; tabs.forEach(t => { t.style.opacity = ''; }); }
    UI.kick(); if (comp !== compT) craf = requestAnimationFrame(squeeze);
  };
  const go = t => { if (t !== compT) { compT = t; if (!craf) craf = requestAnimationFrame(squeeze); } };
  row.addEventListener('click', e => { if (comp > .4) { e.preventDefault(); go(0); } });
  // Tint follows what is under the bar, as iOS does: light glass over light pages, dark glass over photographs and dark bands
  // It reads the same cached spans of dark sections the header uses, instead of hit-testing the page every frame
  let capY = 0, toneDk = null; addEventListener('resize', () => { capY = 0; });
  const tone = () => { tq = 0; if (!mq.matches) return; if (!capY) { const r = cap.getBoundingClientRect(); capY = r.top + r.height / 2; } if (performance.now() - darkT > 1500) hdrState();
    const y = scrollY + capY, dk = darkR.some(([t, b]) => y >= t && y < b); if (dk === toneDk) return; toneDk = dk; cap.classList.toggle('dk', dk); more.classList.toggle('dk', dk); sheet.classList.toggle('dk', dk); };
  addEventListener('scroll', () => {
    if (!mq.matches) return;
    const y = scrollY, dy = y - lastSY; lastSY = y;
    go(sheet.classList.contains('open') || y < 160 ? 0 : dy > 4 ? 1 : dy < -4 ? 0 : compT);
    if (!tq) tq = requestAnimationFrame(tone);
  }, {passive: true});
  const setSheet = open => {
    sheet.classList.toggle('open', open); sheet.inert = !open; more.setAttribute('aria-expanded', open); more.classList.toggle('x', open);
    if (open) { go(0); const a = sheet.querySelector('nav a'); a && a.focus({preventScroll: true}); }
  };
  sheet.inert = true;
  more.addEventListener('click', () => setSheet(!sheet.classList.contains('open')));
  addEventListener('keydown', e => { if (e.key === 'Escape' && sheet.classList.contains('open')) { setSheet(false); more.focus(); } });
  document.addEventListener('pointerdown', e => { if (sheet.classList.contains('open') && e.target instanceof Element && !e.target.closest('.sheet,#tb-more')) setSheet(false); });
  navSync = sec => {
    going = null; clearTimeout(goingT);
    if (hm.matches(':hover')) nav.classList.add('mute');
    tabs.forEach(a => a.dataset.tab === sec ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
    sheet.querySelectorAll('nav a').forEach(a => a.dataset.sec === sec ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
    more.classList.toggle('on', !tabs.some(a => a.dataset.tab === sec));
    setSheet(false); compT = comp = 0; squeeze(); requestAnimationFrame(tone); UI.kick();
  };
  navTone = () => { if (!tq) tq = requestAnimationFrame(tone); };
})();



// Liquid glass, rendered with WebGL, after Apple's "Meet Liquid Glass" (WWDC25):
// · lensing: the photograph behind each glass capsule is refracted through a convex-squircle bevel using Snell's law,
//   with a slightly different index for red, green and blue, so the rim disperses colour (the backdrop glass cannot do this);
// · specular: the rim catches a light that sits toward the pointer (top-left when the pointer is far away);
// · shadow: soft and floating, deeper for larger glass, pulled in when pressed;
// · morphing: as the pointer approaches, a droplet stretches out of the capsule and merges with it (smooth union of two SDFs);
// · touch: pressing flattens the glass and lights it from within at the touch point.
// Each glass label keeps its text; a canvas under it, inside the photograph's container, draws the glass.
const Glass = (() => {
  const zones = new Set(), byHost = new Map();
  let px = -1e5, py = -1e5, lastMove = 0, lastScroll = 0, settleUntil = 0, raf = 0;
  // No throwaway context to test for WebGL: a zone that cannot get one fails in its constructor and the control falls back
  const ok = !!window.WebGLRenderingContext;
  const VS = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
  const FS = `precision highp float;
uniform vec2 uRes; uniform float uDpr; uniform sampler2D uTex;
uniform vec4 uImg; uniform vec4 uPill; uniform vec3 uDrop;
uniform vec2 uLight; uniform float uPress; uniform float uHover;
uniform vec2 uMouse; uniform vec2 uTouch; uniform float uTint; uniform float uFrost; uniform vec2 uShade; uniform float uRad; uniform float uBev; uniform float uBlob; uniform float uTime; uniform vec3 uHole;
float sdBox(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r; }
float smin(float a, float b, float k){ float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0); return mix(b, a, h) - k * h * (1.0 - h); }
float scene(vec2 p){
  if (uBlob > 0.5) {
    // an oval whose rim breathes: three slow waves around it, and a bulge that leans toward the pointer
    vec2 q = (p - uPill.xy) / uPill.zw; float an = atan(q.y, q.x);
    vec2 mq = (uMouse - uPill.xy) / uPill.zw; float ma = atan(mq.y, mq.x), md = length(mq);
    float pull = 0.075 * exp(-pow(md - 0.95, 2.0) * 5.0);
    float r = 0.88 + 0.045 * sin(2.0 * an + uTime * 0.8) + 0.035 * sin(3.0 * an - uTime * 1.1 + 1.7) + 0.022 * sin(5.0 * an + uTime * 1.6 + 0.6) + pull * pow(max(cos(an - ma), 0.0), 6.0);
    return (length(q) - r) * min(uPill.z, uPill.w) * (1.0 - 0.02 * uPress);
  }
  vec2 hb = uPill.zw * (1.0 - 0.03 * uPress);
  float rr = uRad > 0.0 ? min(uRad, min(hb.x, hb.y)) : min(hb.x, hb.y);
  float d = sdBox(p - uPill.xy, hb, rr);
  if (uDrop.z > 0.4) d = smin(d, length(p - uDrop.xy) - uDrop.z, 20.0);
  return d;
}
vec3 photo(vec2 p){
  vec3 c = texture2D(uTex, clamp((p - uImg.xy) / uImg.zw, vec2(0.0005), vec2(0.9995))).rgb;
  return c * (1.0 - clamp(uShade.x + uShade.y * p.y, 0.0, 1.0));
}
vec3 look(vec2 p){
  if (uFrost < 0.05) return photo(p);
  float r = uFrost;
  return (photo(p) * 2.0 + photo(p + vec2(r, 0.0)) + photo(p - vec2(r, 0.0)) + photo(p + vec2(0.0, r)) + photo(p - vec2(0.0, r))) / 6.0;
}
vec3 soft(vec2 q, float r){
  if (r < 0.6) return photo(q);
  vec3 c = photo(q) * 2.0;
  for (int i = 0; i < 8; i++) { float a = float(i) * 2.39996; float rr = r * sqrt((float(i) + 0.5) / 8.0); c += photo(q + vec2(cos(a), sin(a)) * rr); }
  return c / 10.0;
}
float bh(float x){ return pow(1.0 - pow(1.0 - x, 4.0), 0.25); }
float bs(float x){ float u = 1.0 - x; return u * u * u * pow(max(1.0 - u * u * u * u, 1e-4), -0.75); }
float bend(float slope, float thick, float ior){ float ti = atan(slope); float tt = asin(clamp(sin(ti) / ior, -1.0, 1.0)); return thick * tan(ti - tt); }
void main(){
  vec2 p = vec2(gl_FragCoord.x, uRes.y * uDpr - gl_FragCoord.y) / uDpr;
  float d = scene(p);
  if (uBlob > 0.5) {
    if (d > uBev) { gl_FragColor = vec4(0.0); return; }
    if (d < -14.0) { float s0 = -d; gl_FragColor = vec4(0.0, 0.0, 0.0, exp(-s0 / 14.0) * 0.55 + exp(-s0 / 64.0) * 0.2); return; }
    vec2 e = vec2(0.8, 0.0);
    vec2 n = vec2(scene(p + e.xy) - scene(p - e.xy), scene(p + e.yx) - scene(p - e.yx)); n /= max(length(n), 1e-4);
    vec2 tg = vec2(-n.y, n.x);
    float lip = exp(-d * d / 2.4);
    float lit = 0.5 + 0.5 * max(dot(n, uLight), 0.0);
    if (d < 0.0) {
      float s = -d;
      float ins = exp(-s / 14.0) * 0.55 + exp(-s / 64.0) * 0.2;
      float hi = lip * lit * 0.95;
      gl_FragColor = vec4(vec3(hi), clamp(ins + hi, 0.0, 1.0));
      return;
    }
    float K = uBev / 85.0;
    float f = 1.0 - smoothstep(0.0, uBev, d), f2 = f * f, f4 = f2 * f2;
    float an = atan(p.y - uPill.y, p.x - uPill.x);
    // the glass is a meniscus that climbs to the lip, with slow ripples running outward over it
    float rip = sin(d / (8.0 * K) - uTime * 1.7 + 1.3 * sin(an * 3.0 + uTime * 0.45));
    float slope = 2.8 * f2 + 0.42 * f * rip;
    vec3 N = normalize(vec3(n * slope, 1.0));
    vec2 base = p + n * K * (f2 * 34.0 + f4 * 46.0 + 7.0 * f * rip) + tg * K * f2 * (16.0 * sin(uTime * 0.6 + an * 2.0) + 9.0 * sin(uTime * 1.3 - an * 3.0));
    float disp = K * (f4 * 11.0 + f2 * 2.5 + 2.2 * f * abs(rip));
    // the glass loses focus as it thins out, and melts into the soft photograph around it
    float br = pow(1.0 - f, 1.6) * 22.0;
    vec3 col = vec3(soft(base + n * disp, br).r, soft(base, br).g, soft(base - n * disp, br).b);
    // what glass shows besides what is behind it: the sky on its slopes, and hard highlights
    float fres = pow(1.0 - N.z, 1.6);
    col = mix(col, vec3(0.80, 0.89, 0.98), clamp(fres * 0.7, 0.0, 0.55));
    vec3 L1 = normalize(vec3(-0.42, -0.78, 0.5)), L2 = normalize(vec3(uLight, 0.65));
    float sp = pow(max(reflect(-L1, N).z, 0.0), 42.0) * 1.25 + pow(max(reflect(-L2, N).z, 0.0), 110.0) * 0.9;
    vec3 bow = 0.55 + 0.45 * cos(6.2831 * (an * 0.16 + uTime * 0.05 + d * 0.02 + vec3(0.0, 0.33, 0.67)));
    col *= 1.0 - 0.4 * exp(-pow((d - 7.0 * K) / (6.0 * K), 2.0));
    col += bow * pow(f, 6.0) * 0.34 + vec3(sp + lip * 0.75 * lit);
    float a = smoothstep(0.0, 0.62, f);
    gl_FragColor = vec4(col * a, a);
    return;
  }
  float size = uBlob > 0.5 ? 58.0 : min(uPill.z, uPill.w);
  float ds = scene(p - vec2(0.0, size * 0.5 - uPress * size * 0.28));
  float shadow = (1.0 - smoothstep(-size * 0.6, size * 1.5 - uPress * size * 0.6, ds)) * (0.24 - 0.09 * uPress);
  float contact = (1.0 - smoothstep(-1.0, 4.0, d)) * 0.1;
  float a = clamp(0.5 - d, 0.0, 1.0);
  float sh = max(shadow, contact);
  if (a <= 0.0) { gl_FragColor = vec4(0.0, 0.0, 0.0, sh); return; }
  vec2 e = vec2(0.6, 0.0);
  vec2 n = vec2(scene(p + e.xy) - scene(p - e.xy), scene(p + e.yx) - scene(p - e.yx));
  n /= max(length(n), 1e-4);
  float s = max(-d, 0.0);
  float B = uBev > 0.0 ? uBev : clamp(size * 0.9, 6.0, 26.0);
  float x = clamp(s / B, 0.0, 1.0);
  float Hb = B * 0.8 * (1.0 - 0.45 * uPress);
  float slope = x < 1.0 ? bs(max(x, 0.003)) * Hb / B : 0.0;
  float thick = Hb * bh(x) + B * 0.4;
  vec2 dm = p - uMouse;
  float lr = max(size, 14.0) * 1.7;
  vec2 lens = dm * 0.2 * exp(-dot(dm, dm) / (2.0 * lr * lr)) * uHover;
  float k = uBlob > 0.5 ? 4.4 : 2.1;
  vec3 io = uBlob > 0.5 ? vec3(1.38, 1.50, 1.64) : vec3(1.47, 1.50, 1.54);
  vec2 offR = -n * bend(slope, thick, io.r) * k - lens;
  vec2 offG = -n * bend(slope, thick, io.g) * k - lens;
  vec2 offB = -n * bend(slope, thick, io.b) * k - lens;
  vec3 col = vec3(look(p + offR).r, look(p + offG).g, look(p + offB).b);
  if (uBlob > 0.5) { float lip = smoothstep(0.8 * uBev, uBev * 1.02, s); col = mix(col, uHole * 0.62, lip * 0.75); col *= 1.0 - 0.35 * exp(-pow((uBev - s) / 3.0, 2.0)); }
  col = mix(col, vec3(1.0), uTint) * 1.05 + 0.012;
  vec3 N = normalize(vec3(n * slope, 1.0));
  vec3 L = normalize(vec3(uLight, 0.55));
  float facing = dot(n, uLight);
  float fres = pow(1.0 - N.z, 2.2);
  float rim = exp(-s * s / 1.3);
  if (uBlob > 0.5) fres *= 0.55;
  float lit = (fres * 1.15 + rim * 0.5) * (0.16 + 0.84 * max(facing, 0.0)) + (fres * 0.45 + rim * 0.2) * max(-facing, 0.0);
  float spec = pow(max(reflect(-L, N).z, 0.0), 36.0) * 0.55;
  float innerShade = (1.0 - x) * max(-facing, 0.0) * 0.1;
  vec3 bow = 0.55 + 0.45 * cos(6.2831 * (atan(n.y, n.x) * 0.3 + p.x * 0.003 + vec3(0.0, 0.33, 0.67)));
  col += bow * fres * smoothstep(0.1, 0.9, n.y) * (uBlob > 0.5 ? 0.9 : 0.35);
  vec2 dt = p - uTouch;
  float glow = uPress * exp(-dot(dt, dt) / (2.0 * pow(size * 2.2, 2.0))) * 0.28;
  col = col * (1.0 - innerShade) + vec3(lit * 0.85 + spec + glow);
  gl_FragColor = vec4(col * a, a) + vec4(0.0, 0.0, 0.0, sh * (1.0 - a));
}`;
  const SHADES = {hhero: [[0, .86], [.38, .5], [.70, .08], [1, .3]], hero: [[0, .82], [.45, .35], [.72, .05], [1, .3]], ley: [[0, .44], [1, .44]]};
  const shadeAt = (st, f) => { f = Math.min(1, Math.max(0, f)); for (let i = 0; i < st.length - 1; i++) if (f <= st[i + 1][0]) { const [f0, a0] = st[i], [f1, a1] = st[i + 1]; return a0 + (a1 - a0) * (f - f0) / (f1 - f0); } return st[st.length - 1][1]; };
  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => { es.forEach(e => (byHost.get(e.target) || []).forEach(z => { z.visible = e.isIntersecting; })); kick(); }, {rootMargin: '120px'}) : null;
  function compile(gl, type, src, later) { const sh = gl.createShader(type); gl.shaderSource(sh, src); gl.compileShader(sh); if (!later && !gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh) || 'shader'); return sh; }
  class Zone {
    constructor(label, host, img, o) {
      Object.assign(this, {label, host, img, tint: o.tint, frost: o.frost, margin: o.margin, light: !!o.light, rad: o.rad || 0, bev: o.bev || 0, noDrop: !!o.noDrop, noLens: !!o.noLens, blob: !!o.blob, clip: o.clip || null, hole: o.hole || [.93, .91, .87], into: o.into || null, visible: !io, down: false, hover: 0, press: 0, lx: -.55, ly: -.83, tx: 0, ty: 0, dead: false, tex: false});
      const c = document.createElement('canvas'), gl = c.getContext('webgl', {premultipliedAlpha: true, alpha: true, antialias: false, depth: false, stencil: false});
      if (!gl) throw new Error('webgl');
      // With KHR_parallel_shader_compile the program links off the main thread: nothing waits on it, and the zone draws once it is ready
      const kp = gl.getExtension('KHR_parallel_shader_compile'); this.gl = gl; this.canvas = c;
      const pr = gl.createProgram(); gl.attachShader(pr, compile(gl, gl.VERTEX_SHADER, VS, kp)); gl.attachShader(pr, compile(gl, gl.FRAGMENT_SHADER, FS, kp)); gl.linkProgram(pr);
      const finish = () => {
      if (this.dead) return;
      if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { if (kp) return this.fail(); throw new Error('link'); }
      gl.useProgram(pr);
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(pr, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      this.u = {}; ['uRes', 'uDpr', 'uTex', 'uImg', 'uPill', 'uDrop', 'uLight', 'uPress', 'uHover', 'uMouse', 'uTouch', 'uTint', 'uFrost', 'uShade', 'uRad', 'uBev', 'uBlob', 'uTime', 'uHole'].forEach(k => { this.u[k] = gl.getUniformLocation(pr, k); });
      const tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      this.gl = gl; this.canvas = c;
      const src = () => { if (!o.blurTex) return img; try { const cv = document.createElement('canvas'); cv.width = img.naturalWidth; cv.height = img.naturalHeight; const cx = cv.getContext('2d'); cx.filter = `blur(${o.blurTex}px)`; cx.drawImage(img, 0, 0); return cv; } catch (e) { return img; } };
      const upload = () => { if (this.dead) return; try { gl.bindTexture(gl.TEXTURE_2D, tex); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, src()); this.tex = true; settleUntil = performance.now() + 1500; kick(); } catch (e) { this.fail(); } };
      if (img.complete && img.naturalWidth) upload(); else img.addEventListener('load', upload, {once: true});
      };
      if (kp) { const poll = () => { if (this.dead) return; if (gl.getProgramParameter(pr, kp.COMPLETION_STATUS_KHR)) finish(); else setTimeout(poll, 24); }; setTimeout(poll, 24); } else finish();
      c.className = 'glass-cv'; c.setAttribute('aria-hidden', 'true');
      c.addEventListener('webglcontextlost', ev => { ev.preventDefault(); this.fail(); });
      this.shade = host.classList.contains('hhero') ? SHADES.hhero : host.classList.contains('hero') ? SHADES.hero : host.classList.contains('ley-band') ? SHADES.ley : null;
      if (o.z) c.style.zIndex = o.z; (o.into || host).appendChild(c); label.classList.add('lg-gl'); label._zone = this;
      this.layout(); this.drop = {x: this.pill[0], y: this.pill[1], vx: 0, vy: 0, r: 0};
    }
    fail() { if (this.dead) return; this.dispose(); this.label.classList.add('g', 'dk'); UI.add(this.label, {blur: 4}); }
    dispose() {
      if (this.dead) return; this.dead = true; zones.delete(this);
      const list = byHost.get(this.host); if (list) { const i = list.indexOf(this); if (i >= 0) list.splice(i, 1); if (!list.length) { byHost.delete(this.host); io && io.unobserve(this.host); } }
      const ext = this.gl.getExtension('WEBGL_lose_context'); ext && ext.loseContext(); this.canvas.remove(); this.label.classList.remove('lg-gl'); if (this.label._zone === this) this.label._zone = null;
    }
    // Everything in the host's own CSS pixels, so transforms on the host or its ancestors (drag lean, lift) cancel out.
    layout() {
      const O = this.into || this.host, H = O.getBoundingClientRect(), sc = H.width / (O.offsetWidth || H.width) || 1, Lb = this.label.getBoundingClientRect();
      const lx = (Lb.left - H.left) / sc, ly = (Lb.top - H.top) / sc, lw = Lb.width / sc, lh = Lb.height / sc, m = this.margin;
      const free = !!this.into, x0 = free ? Math.floor(lx - m) : Math.max(0, Math.floor(lx - m)), y0 = free ? Math.floor(ly - m) : Math.max(0, Math.floor(ly - m)), x1 = free ? Math.ceil(lx + lw + m) : Math.min(O.offsetWidth, Math.ceil(lx + lw + m)), y1 = free ? Math.ceil(ly + lh + m) : Math.min(O.offsetHeight, Math.ceil(ly + lh + m));
      const w = Math.max(1, x1 - x0), h = Math.max(1, y1 - y0), dpr = Math.min(this.blob ? 1.5 : 2, devicePixelRatio || 1);
      if (w !== this.w || h !== this.h || dpr !== this.dpr) { this.canvas.width = Math.round(w * dpr); this.canvas.height = Math.round(h * dpr); this.canvas.style.width = w + 'px'; this.canvas.style.height = h + 'px'; this.w = w; this.h = h; this.dpr = dpr; }
      if (x0 !== this.x0 || y0 !== this.y0) { this.canvas.style.left = x0 + 'px'; this.canvas.style.top = y0 + 'px'; this.x0 = x0; this.y0 = y0; }
      this.H = H; this.sc = sc; this.pill = [lx - x0 + lw / 2, ly - y0 + lh / 2, lw / 2, lh / 2];
    }
    imgRect() {
      const I = this.img.getBoundingClientRect(), nw = this.img.naturalWidth, nh = this.img.naturalHeight, sc = this.sc;
      const bx = (I.left - this.H.left) / sc - this.x0, by = (I.top - this.H.top) / sc - this.y0, bw = I.width / sc, bh = I.height / sc, k = Math.max(bw / nw, bh / nh);
      const r = [bx + (bw - nw * k) / 2, by + (bh - nh * k) / 2, nw * k, nh * k];
      if (this.blob) { const g = (this.pill[2] * 2 / 430) / k, [cx, cy] = this.pill; return [cx + (r[0] - cx) * g, cy + (r[1] - cy) * g, r[2] * g, r[3] * g]; }
      return r;
    }
    frame() {
      if (!this.tex || this.dead) return false;
      if (this.blob && !reduce && (this.tick = (this.tick || 0) + 1) % 2) return true;
      // Re-measured only when something can have moved it (scrolling, input, a drag, a resize); a glass that is only
      // animating in place reuses its last measurement instead of laying the page out on every frame
      const nowL = performance.now();
      if (!this.lt || this.down || nowL < settleUntil || nowL - lastScroll < 400 || nowL - lastMove < 700 || nowL - this.lt > 400) { this.layout(); this.ir = this.imgRect(); this.Hh = this.host.offsetHeight; this.lt = nowL; }
      const mx = (px - this.H.left) / this.sc - this.x0, my = (py - this.H.top) / this.sc - this.y0, [cx, cy, hw, hh] = this.pill;
      const qx = Math.abs(mx - cx) - hw + hh, qy = Math.abs(my - cy), dEdge = Math.min(Math.max(qx, qy), 0) + Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) - hh;
      const inZone = mx > -40 && my > -40 && mx < this.w + 40 && my < this.h + 40, over = dEdge < 0;
      const tr = reduce || this.noDrop || !inZone || over ? 0 : Math.min(hh * .95, 18) * (1 - smooth(24, 150, dEdge));
      const d = this.drop, tx = tr > .6 ? mx : cx, ty = tr > .6 ? my : cy;
      d.vx = (d.vx + (tx - d.x) * .13) * .76; d.vy = (d.vy + (ty - d.y) * .13) * .76; d.x += d.vx; d.y += d.vy; d.r += (tr - d.r) * .15;
      this.hover += ((over && !this.noLens ? 1 : 0) - this.hover) * .14; this.press += ((this.down ? 1 : 0) - this.press) * .2;
      if (this.down) { this.tx = mx; this.ty = my; }
      let lx = -.55, ly = -.83;
      if (px > -1e4) { const vx = mx - cx, vy = my - cy, m = Math.hypot(vx, vy) || 1, kk = Math.min(1, m / 420); lx = vx / m * kk - .55 * (1 - kk); ly = vy / m * kk - .83 * (1 - kk); }
      const lm = Math.hypot(lx, ly) || 1; this.lx += (lx / lm - this.lx) * .12; this.ly += (ly / lm - this.ly) * .12;
      let sa = 0, sb = 0;
      if (this.shade) { const Hh = this.Hh, a0 = shadeAt(this.shade, 1 - this.y0 / Hh), a1 = shadeAt(this.shade, 1 - (this.y0 + this.h) / Hh); sa = a0; sb = (a1 - a0) / this.h; }
      const gl = this.gl, u = this.u;
      gl.viewport(0, 0, this.canvas.width, this.canvas.height);
      gl.uniform2f(u.uRes, this.w, this.h); gl.uniform1f(u.uDpr, this.canvas.width / this.w); gl.uniform1i(u.uTex, 0);
      gl.uniform4fv(u.uImg, this.ir); gl.uniform4fv(u.uPill, this.pill); gl.uniform3f(u.uDrop, d.x, d.y, d.r);
      gl.uniform2f(u.uLight, this.lx, this.ly); gl.uniform1f(u.uPress, this.press); gl.uniform1f(u.uHover, this.hover);
      gl.uniform2f(u.uMouse, mx, my); gl.uniform2f(u.uTouch, this.tx, this.ty); gl.uniform1f(u.uTint, this.tint); gl.uniform1f(u.uFrost, this.frost); gl.uniform2f(u.uShade, sa, sb); gl.uniform1f(u.uRad, this.rad); gl.uniform1f(u.uBev, this.bev); gl.uniform1f(u.uBlob, this.blob ? 1 : 0); gl.uniform1f(u.uTime, reduce ? 0 : performance.now() / 1000); gl.uniform3fv(u.uHole, this.hole);
      gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (this.clip) {
        const t = reduce ? 0 : performance.now() / 1000, mqx = (mx - cx) / hw, mqy = (my - cy) / hh, ma = Math.atan2(mqy, mqx), pull = .075 * Math.exp(-Math.pow(Math.hypot(mqx, mqy) - .95, 2) * 5), mn = Math.min(hw, hh), CB = this.clip.getBoundingClientRect(), ox = this.x0 - (CB.left - this.H.left) / this.sc, oy = this.y0 - (CB.top - this.H.top) / this.sc, pts = [];
        for (let i = 0; i < 72; i++) { const an = i / 72 * Math.PI * 2, r = .88 + .045 * Math.sin(2 * an + t * .8) + .035 * Math.sin(3 * an - t * 1.1 + 1.7) + .022 * Math.sin(5 * an + t * 1.6 + .6) + pull * Math.pow(Math.max(Math.cos(an - ma), 0), 6) - 1 / mn; pts.push((ox + cx + Math.cos(an) * r * hw).toFixed(1) + 'px ' + (oy + cy + Math.sin(an) * r * hh).toFixed(1) + 'px'); }
        this.clip.style.clipPath = 'polygon(' + pts.join(',') + ')';
      }
      return (this.blob && !reduce) || Math.abs(d.vx) + Math.abs(d.vy) > .04 || Math.abs(tr - d.r) > .04 || Math.abs((over ? 1 : 0) - this.hover) > .01 || Math.abs((this.down ? 1 : 0) - this.press) > .01;
    }
  }
  // On touch screens nothing is redrawn while the page is moving: each canvas travels with the photograph it bends, so the last
  // frame stays correct, and the GPU is left to the scroll. Drawing resumes the moment the page comes to rest.
  const coarse = matchMedia('(pointer: coarse)');
  function loop() {
    raf = 0;
    if (coarse.matches && document.documentElement.classList.contains('is-scrolling')) { clearTimeout(loop.t); loop.t = setTimeout(kick, 180); return; }
    const now = performance.now(); let busy = now < settleUntil || now - lastMove < 700 || now - lastScroll < 350;
    for (const z of [...zones]) {
      if (!z.label.isConnected) { z.dispose(); continue; }
      if (z.visible && z.frame()) busy = true;
    }
    if (busy && zones.size) raf = requestAnimationFrame(loop);
  }
  function kick() { if (!raf) raf = requestAnimationFrame(loop); }
  addEventListener('pointermove', e => { px = e.clientX; py = e.clientY; lastMove = performance.now(); kick(); }, {passive: true});
  addEventListener('scroll', () => { lastScroll = performance.now(); kick(); }, {passive: true});
  addEventListener('resize', () => { settleUntil = performance.now() + 600; kick(); });
  addEventListener('pointerdown', e => { const l = e.target instanceof Element && e.target.closest('.lg-gl'); if (l && l._zone) { l._zone.down = true; lastMove = performance.now(); kick(); } });
  addEventListener('pointerup', () => { zones.forEach(z => { z.down = false; }); lastMove = performance.now(); kick(); });
  document.documentElement.addEventListener('mouseleave', () => { px = py = -1e5; kick(); });
  function attach(label, o) {
    if (!ok) return false;
    if (label._zone && !label._zone.dead) return true;
    if (zones.size >= 10) return false;
    const host = label.closest('.hhero,.hero,.touch,.mz-vis,.ley-band'), img = host && host.querySelector(':scope > .ph img, .ph img');
    if (!img) return false;
    try {
      const z = new Zone(label, host, img, o); zones.add(z);
      if (!byHost.has(host)) { byHost.set(host, []); io && io.observe(host); }
      else { const sib = byHost.get(host)[0]; if (sib) z.visible = sib.visible; }
      byHost.get(host).push(z); settleUntil = performance.now() + 4500; kick(); return true;
    } catch (e) { return false; }
  }
  return {attach, ok, zones, kick: () => { settleUntil = performance.now() + 400; kick(); }};
})();
window.__glass = Glass;
// Glass on the page itself: the back button over a detail page's photograph is drawn with WebGL (true refraction of that
// photograph in every browser); other glass controls on the page use the backdrop glass.
function glassify() {
  app.querySelectorAll('.hero .back').forEach(el => { if (!Glass.attach(el, {tint: .08, frost: 0, margin: 140})) { el.classList.add('g', 'dk'); UI.add(el, {blur: 4}); } });
  app.querySelectorAll('.g').forEach(el => UI.add(el, {blur: 4, sat: 1.7}));
}

// Small things that show someone thought about them. Each one lives in a single place, so none of them crowds a page.
const GLOSS = [['NSR-10', 'Reglamento Colombiano de Construcción Sismo Resistente, vigente desde 2010.'], ['Ley 1796', 'Ley de Vivienda Segura (2016): revisión independiente de diseños y supervisión técnica.'], ['Certificado Técnico de Ocupación', 'Lo firma el supervisor técnico al terminar la obra. Sin él, la edificación no se puede ocupar.'], ['curaduría', 'Oficina que estudia y expide las licencias de construcción.'], ['f′c', 'Resistencia a compresión del concreto especificada en el diseño, medida a 28 días.'], ['ETABS', 'Programa de análisis estructural de edificios.'], ['LOD', 'Nivel de detalle de un modelo BIM.']];
function details() {
  // Glossary: the first mention of each technical term on a page explains itself on hover or focus
  const seen = new Set();
  app.querySelectorAll('.intro p, .zz p, .article p, .faq details p, .story p, .law, .steps p').forEach(par => {
    const walk = document.createTreeWalker(par, NodeFilter.SHOW_TEXT), nodes = []; while (walk.nextNode()) nodes.push(walk.currentNode);
    nodes.forEach(n => { for (const [term, def] of GLOSS) { if (seen.has(term)) continue; const i = n.nodeValue.indexOf(term); if (i < 0 || n.parentElement.closest('a,.gl-term')) continue; const rg = document.createRange(); rg.setStart(n, i); rg.setEnd(n, i + term.length); const sp = document.createElement('span'); sp.className = 'gl-term'; sp.tabIndex = 0; sp.dataset.def = def; rg.surroundContents(sp); seen.add(term); break; } });
  });
  // The big words carry a dimension line: hover one and the site measures it, in millimetres on your screen
  app.querySelectorAll('.hhero:not(.hh-scene) .hello, .bigword').forEach(w => {
    const host = w.parentElement; let dim = null;
    w.addEventListener('pointerenter', () => {
      const rg = document.createRange(); rg.selectNodeContents(w); const t = rg.getBoundingClientRect(), H = host.getBoundingClientRect();
      if (!dim) { dim = document.createElement('span'); dim.className = 'dim'; dim.setAttribute('aria-hidden', 'true'); host.appendChild(dim); }
      dim.innerHTML = `<b>≈ ${Math.round(t.width * 25.4 / 96).toLocaleString('es-CO')} mm</b>`;
      dim.style.left = (t.left - H.left) + 'px'; dim.style.top = (t.top - H.top - 18) + 'px'; dim.style.width = t.width + 'px';
      requestAnimationFrame(() => dim.classList.add('on'));
    });
    w.addEventListener('pointerleave', () => { if (dim) dim.classList.remove('on'); });
  });
  // Contact details copy themselves
  app.querySelectorAll('.office dd').forEach(dd => {
    const dt = dd.previousElementSibling ? dd.previousElementSibling.textContent : ''; if (!/Correo|Teléfono|WhatsApp/.test(dt)) return;
    dd.dataset.cursor = 'Copiar'; dd.tabIndex = 0;
    const copy = () => { (navigator.clipboard ? navigator.clipboard.writeText(dd.textContent.trim()) : Promise.reject()).then(() => { dd.classList.add('copied'); setTimeout(() => dd.classList.remove('copied'), 1400); }, () => {}); };
    dd.addEventListener('click', copy); dd.addEventListener('keydown', e => { if (e.key === 'Enter') copy(); });
  });
  // Reading an article is a pour: a line under the header fills as it is read and reaches f′c at the end
  const art = app.querySelector('.article');
  if (art) {
    const bar = document.createElement('div'); bar.className = 'fragua'; bar.setAttribute('aria-hidden', 'true'); bar.innerHTML = '<i></i><span></span>'; app.appendChild(bar);
    const fill = bar.querySelector('i'), lab = bar.querySelector('span');
    const f = () => { const r = art.getBoundingClientRect(), q = Math.min(1, Math.max(0, (innerHeight * .5 - r.top) / r.height)); fill.style.transform = `scaleX(${q.toFixed(3)})`; lab.textContent = q >= .99 ? 'f′c alcanzado · 28 días' : `Fraguado ${Math.round(q * 100)} %`; bar.classList.toggle('on', q > .01); };
    scrollFns.add(f); f();
  }
  if (document.fonts) document.fonts.ready.then(() => { const fl = app.querySelector('.filters'); if (fl) railTo(fl, fl.querySelector('[aria-pressed="true"]')); });
}
// An underline that slides to the chosen tab instead of jumping
function railTo(box, el) {
  if (!box || !el) return;
  let r = box.querySelector(':scope > .rail'); if (!r) { r = document.createElement('i'); r.className = 'rail'; r.setAttribute('aria-hidden', 'true'); box.appendChild(r); }
  r.style.width = el.offsetWidth + 'px'; r.style.transform = `translateX(${el.offsetLeft}px)`;
}
// A short message on glass at the bottom of the window
function toast(msg) {
  const t = document.createElement('div'); t.className = 'toast g'; t.setAttribute('role', 'status'); t.innerHTML = '<span class="gl" aria-hidden="true"></span>' + msg;
  document.body.appendChild(t); UI.add(t, {blur: 10, sat: 1.8});
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('on')));
  setTimeout(() => { t.classList.remove('on'); setTimeout(() => t.remove(), 600); }, 3400);
}

// Ley 1796 assistant. The law's trigger is a lot (or lots) that allows MORE than 2.000 m² of built area, whatever the use.
// The visitor sets area, floors and use with sliders and the site answers with the building itself: an isometric model of the
// works, drawn from the data. Floors past 2.000 m² are banded in orange, the storey height and facade follow the use, the
// tower crane climbs with the building, and callouts read the model back in the law's terms. Hovering a floor gives its level,
// the area built up to it and its share of the base shear (NSR-10 A.4.3: Fx ∝ hx^k, T ≈ Ct·h^α, Ct 0,047, α 0,9).
const Iso = (() => {
  const C = Math.cos(Math.PI / 6), P = (x, y, z) => [(x - y) * C, (x + y) * .5 - z];
  const f = v => v.toFixed(2);
  const dk = h => { const n = parseInt(h.slice(1), 16), m = v => Math.round(v * .6).toString(16).padStart(2, '0'); return '#' + m(n >> 16) + m(n >> 8 & 255) + m(n & 255); };
  const pts = a => a.map(p => { const q = P(p[0], p[1], p[2]); return f(q[0]) + ',' + f(q[1]); }).join(' ');
  const poly = (a, fill, ex = '') => `<polygon points="${pts(a)}" fill="${fill}"${/^#[0-9a-f]{6}$/i.test(fill) && !ex ? ` stroke="${dk(fill)}" stroke-width=".1" stroke-linejoin="round" stroke-opacity=".85"` : ''}${ex}/>`;
  const line = (a, st, sw, ex = '') => `<polyline points="${pts(a)}" fill="none" stroke="${st}" stroke-width="${sw}"${ex}/>`;
  // c = [top, face toward +y (lit, lower left), face toward +x (shade, lower right)]
  const box = (x, y, z, w, d, h, c, ex = '') =>
    poly([[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]], c[1], ex) +
    poly([[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]], c[2], ex) +
    poly([[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]], c[0], ex);
  return {P, pts, poly, line, box, f};
})();

const CITY = new Map();
function isoScene(s) {
  const {P, poly, line, box, f} = Iso;
  const K = {
    plot: ['#e9dfcf', '#9b8c7d', '#6c5f55'], con: ['#e6e0d7', '#b9b0a4', '#8a8075'], col: ['#dcd5cb', '#b1a699', '#7c7266'],
    wood: ['#e6ddcf', '#c9bba7', '#a39380'], yel: ['#dcc592', '#bf9f5e', '#8c7240'], dark: ['#57524d', '#3b3632', '#25211e'],
    steel: '#8a5b45', pole: '#6b7278', fence: '#9aa0a5', vest: '#c8d93b', skin: '#b98262', helm: ['#f4f2ee', '#ffffff'], acc: '#e8784a', accD: '#c9602f'
  };
  const FAC = {
    viv: {wall: ['#faf8f4', '#e6e0d7', '#aaa092'], win: '#34506a', band: '#ebe6de', core: '#b98f6a', balc: true},
    ofi: {wall: ['#eaf0f4', '#94abbb', '#5f7890'], win: '#34495c', band: '#e2e8ec', core: '#5b6d7c', glass: true},
    ind: {wall: ['#f2f2ef', '#d4d5d0', '#a3a49e'], win: '#5a6068', band: '#cfd0cc', core: '#8e9296', ribs: true},
    cc: {wall: ['#faf7f2', '#e5ddd2', '#a99d8e'], win: '#34506a', band: '#ebe5dc', core: '#b0714a', sign: true},
    edu: {wall: ['#f3ddcb', '#cf8460', '#9c5a38'], win: '#3a4a58', band: '#ecd6c2', core: '#8a4d31', ribbon: true},
    sal: {wall: ['#fbfbf9', '#e2e8e7', '#b5c1c0'], win: '#3a6574', band: '#e6ebea', core: '#6f9a9c', cross: true}
  };
  const F = FAC[s.uso];
  const apf = Math.max(40, s.area / s.pisos), asp = s.uso === 'ind' ? 1.6 : 1.45;
  const w = Math.max(6, Math.sqrt(apf * asp)), d = Math.max(5, apf / w), hf = s.hf, n = s.pisos, roof = n * hf;
  const need = 2000 / (s.area / s.pisos), skel = n <= 2 ? 0 : Math.min(n, Math.max(1, Math.ceil(n * .3))), fin = n - skel, fl = Math.floor(need) + 1;
  const X0 = -15, Y0 = -6, X1 = w + 10, Y1 = d + 11.5, XF = -3.2, SW = 2, YF = Y1 - SW - .4, XR = X1 - SW - .4;
  let o = '', sh = '';
  const SX = .42, SY = 0; // ground offset of a shadow per metre of height, away from the light
  const shadow = (x, y, bw, bd, h) => { const sx = h * SX, sy = h * SY; sh += poly([[x, y + bd, 0], [x, y, 0], [x + sx, y + sy, 0], [x + bw + sx, y + sy, 0], [x + bw + sx, y + bd + sy, 0], [x + bw, y + bd, 0]], 'rgba(0,0,0,1)'); };
  // people: standing, guiding a load with a raised arm, or bent over the bars
  const man = (x, y, z, hat = 0, flip = 1, pose = 0) => { const q = P(x, y, z), arm = pose === 1 ? 'M.3 -1.5l.3 -.75' : 'M.3 -1.5l.35 .55';
    return `<g transform="translate(${f(q[0])} ${f(q[1])}) scale(${1.15 * flip} 1.15)"><ellipse cx=".15" cy=".03" rx=".42" ry=".13" fill="rgba(30,20,10,.22)"/><path d="M-.15 0v-.82M.15 0v-.82" stroke="#1d2530" stroke-width=".22" stroke-linecap="round"/><g${pose === 2 ? ' transform="rotate(34 0 -.8)"' : ''}><path d="M-.28 -.8h.56l.05 -.8h-.66z" fill="${K.vest}"/><path d="M-.28 -1.18h.58" stroke="#fff" stroke-width=".07" opacity=".85"/><path d="${arm}" stroke="${K.vest}" stroke-width=".16" stroke-linecap="round"/><path d="M-.3 -1.5l-.28 .55" stroke="${K.vest}" stroke-width=".16" stroke-linecap="round"/><circle cy="-1.82" r=".2" fill="${K.skin}"/><path d="M-.27 -1.84a.27 .27 0 0 1 .54 0z" fill="${K.helm[hat]}"/><path d="M-.32 -1.84h.64" stroke="${K.helm[hat]}" stroke-width=".07"/></g></g>`; };
  const palm = (x, y, k = 1) => { const b = P(x, y, 0), t = P(x, y, 6.2 * k); let r = `<ellipse cx="${f(b[0] + 1.6 * k)}" cy="${f(b[1] + .5)}" rx="${f(1.9 * k)}" ry="${f(.7 * k)}" fill="rgba(30,22,15,.2)"/><path d="M${f(b[0] - .16)} ${f(b[1])}Q${f(b[0] + .3)} ${f((b[1] + t[1]) / 2)} ${f(t[0] - .08)} ${f(t[1])}h.2Q${f(b[0] + .55)} ${f((b[1] + t[1]) / 2)} ${f(b[0] + .16)} ${f(b[1])}Z" fill="#a8998a" stroke="#6f6459" stroke-width=".06"/>`;
    for (const [ang, len, c] of [[-160, 2.4, '#5f8544'], [-20, 2.4, '#5f8544'], [-120, 2.2, '#7ea457'], [-60, 2.2, '#7ea457'], [-95, 1.9, '#8fb566'], [150, 1.8, '#4f7439'], [30, 1.8, '#4f7439']]) { const a2 = ang * Math.PI / 180, ex = t[0] + Math.cos(a2) * len * k, ey = t[1] + Math.sin(a2) * len * k * .7 + .9 * k, mx = t[0] + Math.cos(a2) * len * .5 * k, my = t[1] + Math.sin(a2) * len * .5 * k - .5 * k; r += `<path d="M${f(t[0])} ${f(t[1])}Q${f(mx)} ${f(my - .35)} ${f(ex)} ${f(ey)}Q${f(mx)} ${f(my + .35)} ${f(t[0])} ${f(t[1])}Z" fill="${c}"/>`; }
    return r; };
  const tree = (x, y, k = 1) => { const b = P(x, y, 0), t = P(x, y, 2.4 * k); return `<ellipse cx="${f(b[0] + .9 * k)}" cy="${f(b[1] + .3)}" rx="${f(1.4 * k)}" ry="${f(.55 * k)}" fill="rgba(30,22,15,.2)"/><path d="M${f(b[0])} ${f(b[1])}L${f(t[0])} ${f(t[1])}" stroke="#6b4a33" stroke-width="${f(.28 * k)}" stroke-linecap="round"/><circle cx="${f(t[0] + .35 * k)}" cy="${f(t[1] - .15 * k)}" r="${f(1.3 * k)}" fill="#5f8544" stroke="#46652f" stroke-width=".08"/><circle cx="${f(t[0] - .2 * k)}" cy="${f(t[1] - .55 * k)}" r="${f(1.25 * k)}" fill="#7ea457"/><circle cx="${f(t[0] - .55 * k)}" cy="${f(t[1] - .95 * k)}" r="${f(.6 * k)}" fill="#a2c476"/>`; };
  const grid = (len, step) => { const m = Math.max(2, Math.round(len / step) + 1); return Array.from({length: m}, (_, k) => k * (len - .5) / (m - 1)); };
  const fence = (a, b, gap) => {
    let r = ''; const L = Math.hypot(b[0] - a[0], b[1] - a[1]), m = Math.max(1, Math.round(L / 3)), at = t => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    for (let k = 0; k < m; k++) { const t0 = k / m, t1 = (k + 1) / m; if (gap && t1 > gap[0] && t0 < gap[1]) continue; const p = at(t0), q = at(t1); r += poly([[p[0], p[1], .15], [q[0], q[1], .15], [q[0], q[1], 1.9], [p[0], p[1], 1.9]], 'rgba(110,118,126,.16)') + line([[p[0], p[1], 1.9], [q[0], q[1], 1.9]], K.fence, .1) + line([[p[0], p[1], .2], [q[0], q[1], .2]], K.fence, .08); }
    for (let k = 0; k <= m; k++) { const t = k / m; if (gap && t > gap[0] && t < gap[1]) continue; const p = at(t); r += line([[p[0], p[1], 0], [p[0], p[1], 2]], '#7f868c', .12); }
    return r;
  };

  // ---- the city around the site. It runs on well past the portal in every direction, so the ground never ends in an edge:
  // behind and to the left, blocks in the colours of the Caribbean coast; the two streets go on with their kerbs, verges,
  // palms and traffic. It is drawn in its own layer under a horizon haze, once per lot size.
  const gkey = w.toFixed(2) + ',' + d.toFixed(2), ckey = (Math.round(X1 / 2) * 2) + ',' + (Math.round(Y1 / 2) * 2);
  let ground = CITY.get('s' + gkey), city = CITY.get('c' + ckey);
  if (!ground || !city) {
    const G = 240, gx0 = X0 - G, gy0 = Y0 - G, gx1 = X1 + G, gy1 = Y1 + G, RW = 8.5, SK = 2.2, VG = 2.8, ys = Y1 + RW, xs = X1 + RW, CL = 26;
    const rnd = (i, j, k) => { let h = Math.imul((i * 73856093) ^ (j * 19349663) ^ (k * 83492791), 2654435761) >>> 0; h ^= h >>> 15; h = Math.imul(h, 2246822519) >>> 0; h ^= h >>> 13; return (h >>> 0) / 4294967296; };
    const tint = (c, m) => '#' + [1, 3, 5].map(i => Math.min(255, Math.round(parseInt(c.slice(i, i + 2), 16) * m)).toString(16).padStart(2, '0')).join('');
    const PAL = ['#f6f0e4', '#f5d6ab', '#f0b99a', '#c7e3d2', '#cfe0f3', '#f6e39a', '#eaa98e', '#f3f2ee', '#d9e9bf', '#f2c7cf'];
    const band = (xa, ya, xb, yb, c) => poly([[xa, ya, 0], [xb, ya, 0], [xb, yb, 0], [xa, yb, 0]], c);
    if (!ground) {
    let g = band(gx0, gy0, gx1, gy1, '#e8dfcf');
    // kerbs and verges on both sides of both streets, then the asphalt
    g += band(gx0, Y1 - SK - VG, gx1, Y1 - SK, '#b9d494') + band(gx0, Y1 - SK, gx1, Y1, '#e3dcd0') + band(gx0, ys, gx1, ys + SK, '#e3dcd0') + band(gx0, ys + SK, gx1, ys + SK + VG, '#b9d494');
    g += band(X1 - SK - VG, gy0, X1 - SK, gy1, '#b9d494') + band(X1 - SK, gy0, X1, gy1, '#e3dcd0') + band(xs, gy0, xs + SK, gy1, '#e3dcd0') + band(xs + SK, gy0, xs + SK + VG, gy1, '#b9d494');
    g += band(gx0, Y1, gx1, ys, '#8b9196') + band(X1, gy0, xs, gy1, '#8b9196');
    for (let x = X0 - 130; x < X1 + 130; x += 3.4) if (x < X1 - 1 || x > xs + 1) g += line([[x, Y1 + RW / 2, 0], [x + 1.6, Y1 + RW / 2, 0]], '#f7f3e8', .17);
    for (let y = Y0 - 130; y < Y1 + 130; y += 3.4) if (y < Y1 - 1 || y > ys + 1) g += line([[X1 + RW / 2, y, 0], [X1 + RW / 2, y + 1.6, 0]], '#f7f3e8', .17);
    for (let k = 0; k < 6; k++) g += band(X1 + .7 + k * 1.3, Y1 + .7, X1 + 1.3 + k * 1.3, ys - .7, 'rgba(255,255,255,.8)');
    for (let k = 0; k < 6; k++) g += band(X1 + .7, ys + .9 + k * 1.3, xs - .7, ys + 1.5 + k * 1.3, 'rgba(255,255,255,.8)');
    const CARS = ['#d6453d', '#3f6fb5', '#f2f2ee', '#f2c230', '#9aa3ab', '#2f9a8a'];
    const carX = (x, y, c) => box(x, y, 0, 4.4, 1.9, .95, [c, tint(c, .9), tint(c, .72)]) + box(x + 1.1, y + .2, .95, 2.2, 1.5, .62, ['#dfe9f1', '#6f8fae', '#56718c']);
    const carY = (x, y, c) => box(x, y, 0, 1.9, 4.4, .95, [c, tint(c, .9), tint(c, .72)]) + box(x + .2, y + 1.1, .95, 1.5, 2.2, .62, ['#dfe9f1', '#6f8fae', '#56718c']);
    [[-34, 1], [-14, 0], [6, 1], [X1 + 22, 0], [X1 + 44, 1]].forEach(([x, lane], k) => { g += carX(x, Y1 + (lane ? 5.6 : 2.4), CARS[k % CARS.length]); });
    [[-40, 1], [-18, 0], [Y1 + 22, 1], [Y1 + 40, 0]].forEach(([y, lane], k) => { g += carY(X1 + (lane ? 5.6 : 2.4), y, CARS[(k + 3) % CARS.length]); });
    ground = g; CITY.set('s' + gkey, g); }
    if (!city) { city = ((X1, Y1) => { const ys = Y1 + RW, xs = X1 + RW; let g = '';
    // blocks, back to front
    const cells = [], lotHit = (cx, cy, s) => cx < X1 + 1 && cx + s > X0 - 4 && cy < Y1 && cy + s > Y0 - 4;
    for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) { const cx = X1 - SK - VG - CL * (i + 1), cy = Y1 - SK - VG - CL * (j + 1); if (!lotHit(cx, cy, CL)) cells.push([cx, cy, 0]); }
    for (let i = 0; i < 3; i++) for (let j = 0; j < 6; j++) { const cx = xs + SK + VG + CL * i, cy = Y1 - SK - VG - CL * (j + 1); cells.push([cx, cy, j < 2 ? 1 : 0]); }
    // across the front street the houses stay low, so they never rise into the site behind them
    for (let j = 0; j < 4; j++) { const cy = ys + SK + VG + CL * j; for (let i = 0; i < 6; i++) cells.push([X1 - SK - VG - CL * (i + 1), cy, 1]); for (let i = 0; i < 3; i++) cells.push([xs + SK + VG + CL * i, cy, 1]); }
    cells.sort((p, q2) => (p[0] + p[1]) - (q2[0] + q2[1]));
    for (const [cx, cy, low] of cells) {
      const ci = Math.round(cx - X1), cj = Math.round(cy - Y1), r = k => rnd(ci, cj, k);
      if (r(0) < .16) { g += band(cx + 1.5, cy + 1.5, cx + CL - 1.5, cy + CL - 1.5, '#b4d18c'); for (let k = 0; k < 5; k++) g += tree(cx + 4 + r(10 + k) * (CL - 8), cy + 4 + r(20 + k) * (CL - 8), 1 + r(30 + k) * .5); continue; }
      const bw = 11 + r(1) * 10, bd = 10 + r(2) * 10, fl = low ? 1 + Math.floor(r(3) * 2) : 1 + Math.floor(r(3) * r(3) * 8), h = fl * 3.1 + .4, ox = cx + 2 + r(4) * (CL - 4 - bw), oy = cy + 2 + r(5) * (CL - 4 - bd), c = PAL[Math.floor(r(6) * PAL.length)];
      g += box(ox, oy, 0, bw, bd, h, [tint(c, 1.03), tint(c, .94), tint(c, .8)]);
      for (let z = 1.7; z < h - .9; z += 3.1) g += line([[ox + .9, oy + bd, z], [ox + bw - .9, oy + bd, z]], 'rgba(46,78,108,.42)', .62) + line([[ox + bw, oy + .9, z], [ox + bw, oy + bd - .9, z]], 'rgba(30,52,74,.42)', .62);
      if (h > 9 && r(7) < .7) g += box(ox + bw * .55, oy + bd * .3, h, 2.2, 2.2, 1.3, ['#eeeae3', '#d3cec6', '#b7b1a8']);
      if (r(8) < .55) g += tree(ox + bw + 1.4, oy + bd + 1.2, 1.1);
    }
    // palms and trees on the verges, traffic in the lanes
    for (let x = X0 - 50; x < X1 + 60; x += 8.5) { if (x > X1 - 5 && x < xs + 5) continue; g += (Math.round(x) % 2 ? palm : tree)(x, ys + SK + VG / 2, 1); }
    for (let y = Y0 - 50; y < Y1 + 60; y += 8.5) { if (y > Y1 - 5 && y < ys + 5) continue; if (y > Y0 - 2 && y < Y1) continue; g += tree(xs + SK + VG / 2, y, 1.05); }
    return g; })(Math.round(X1 / 2) * 2, Math.round(Y1 / 2) * 2); CITY.set('c' + ckey, city); }
    while (CITY.size > 80) CITY.delete(CITY.keys().next().value);
  }
  o += poly([[X0, Y0, 0], [X1, Y0, 0], [X1, Y1, 0], [X0, Y1, 0]], '#e4dccf');
  o += poly([[X0, Y1 - SW, 0], [X1, Y1 - SW, 0], [X1, Y1, 0], [X0, Y1, 0]], '#dcd5ca') + poly([[X1 - SW, Y0, 0], [X1, Y0, 0], [X1, Y1 - SW, 0], [X1 - SW, Y1 - SW, 0]], '#dcd5ca');
  for (let x = X0 + 1.6; x < X1; x += 1.6) o += line([[x, Y1 - SW, 0], [x, Y1, 0]], 'rgba(0,0,0,.09)', .05);
  for (let y = Y0 + 1.6; y < Y1 - SW; y += 1.6) o += line([[X1 - SW, y, 0], [X1, y, 0]], 'rgba(0,0,0,.09)', .05);
  o += line([[X0, Y1 - SW, 0], [X1 - SW, Y1 - SW, 0], [X1 - SW, Y0, 0]], 'rgba(0,0,0,.2)', .08) + line([[X0, Y1, 0], [X1, Y1, 0], [X1, Y0, 0]], 'rgba(0,0,0,.14)', .1);
  // the site itself is bare earth, a little darker than the street
  o += poly([[XF, Y0 + 1, 0], [XR, Y0 + 1, 0], [XR, YF, 0], [XF, YF, 0]], '#e1cfb3') + '<!--SH-->' + poly([[XF + 1, d + 3.4, 0], [w * .75, d + 3.4, 0], [w * .75, YF - .6, 0], [XF + 1, YF - .6, 0]], 'rgba(150,115,80,.16)');

  // ---- the neighbour: a finished four-storey hotel, its shadow across the fence
  const nx0 = X0 + 1, nx1 = XF - 1.2, ny0 = d * .12, ny1 = d + 3.2, nw = nx1 - nx0, nd = ny1 - ny0, NH = 4 * 3.1;
  shadow(nx0, ny0, nw, nd, NH + .7);
  o += box(nx0, ny0, 0, nw, nd, NH, ['#f3f1ed', '#dfdad3', '#bdb6ad']);
  for (let k = 1; k < 4; k++) { const z = k * 3.1;
    o += poly([[nx0, ny1, z - .05], [nx1, ny1, z - .05], [nx1, ny1, z + .2], [nx0, ny1, z + .2]], '#ebe7e1') + poly([[nx1, ny0, z - .05], [nx1, ny1, z - .05], [nx1, ny1, z + .2], [nx1, ny0, z + .2]], '#cbc5bd');
    for (let u = .8; u + 1.3 < nw; u += 2.2) o += poly([[nx0 + u, ny1, z + .7], [nx0 + u + 1.3, ny1, z + .7], [nx0 + u + 1.3, ny1, z + 2.3], [nx0 + u, ny1, z + 2.3]], '#a7b0b8') + poly([[nx0 + u - .12, ny1, z + .55], [nx0 + u + 1.42, ny1, z + .55], [nx0 + u + 1.42, ny1 + .15, z + .68], [nx0 + u - .12, ny1 + .15, z + .68]], '#fbf4ea');
    for (let u = .8; u + 1.3 < nd; u += 2.2) o += poly([[nx1, ny1 - u, z + .7], [nx1, ny1 - u - 1.3, z + .7], [nx1, ny1 - u - 1.3, z + 2.3], [nx1, ny1 - u, z + 2.3]], '#949ea7'); }
  o += poly([[nx0 + .5, ny1, .1], [nx1 - .5, ny1, .1], [nx1 - .5, ny1, 2.5], [nx0 + .5, ny1, 2.5]], '#3a4f60');
  for (let k = 0; k < Math.floor((nw - 1) / .8); k++) { const u = nx0 + .5 + k * .8; o += poly([[u, ny1, 2.65], [u + .8, ny1, 2.65], [u + .8, ny1 + 1.4, 2.05], [u, ny1 + 1.4, 2.05]], k % 2 ? '#f4f1ec' : '#cfc8bf'); }
  { const sg = P(nx0 + nw * .2, ny1, 3.1); o += `<g transform="matrix(${f(Math.cos(Math.PI / 6))} .5 0 1 ${f(sg[0])} ${f(sg[1])})"><rect x="0" y="-1.3" width="${f(nw * .6)}" height="1.3" fill="#8e8780"/><text x="${f(nw * .3)}" y="-.3" text-anchor="middle" font-size="1" font-weight="700" fill="#ffe2b8" letter-spacing=".06">Hotel</text></g>`; }
  o += box(nx0, ny0, NH, nw, nd, .7, ['#d2ccc4', '#dcd6ce', '#b3aca3']) + poly([[nx0 + .35, ny0 + .35, NH + .7], [nx1 - .35, ny0 + .35, NH + .7], [nx1 - .35, ny1 - .35, NH + .7], [nx0 + .35, ny1 - .35, NH + .7]], '#c3bcb3');
  { const tx0 = nx0 + nw * .12, ty0 = ny0 + nd * .62; for (const [ax, ay] of [[0, 0], [1.4, 0], [0, 1.4], [1.4, 1.4]]) o += line([[tx0 + ax, ty0 + ay, NH + .7], [tx0 + ax, ty0 + ay, NH + 2]], '#4e5357', .1);
    o += poly([[tx0 - .2, ty0 - .2, NH + .71], [tx0 + 1.6, ty0 - .2, NH + .71], [tx0 + 2.4, ty0 + 1.2, NH + .71], [tx0 + .6, ty0 + 1.6, NH + .71]], 'rgba(0,0,0,.18)');
    const tb = P(tx0 + .7, ty0 + .7, NH + 2), tt = P(tx0 + .7, ty0 + .7, NH + 3.8); o += `<path d="M${f(tb[0] - 1.05)} ${f(tb[1])}V${f(tt[1])}A1.05 .5 0 0 1 ${f(tb[0] + 1.05)} ${f(tt[1])}V${f(tb[1])}A1.05 .5 0 0 1 ${f(tb[0] - 1.05)} ${f(tb[1])}Z" fill="#a9b6c0" stroke="#7d8a94" stroke-width=".09"/><ellipse cx="${f(tt[0])}" cy="${f(tt[1])}" rx="1.05" ry=".5" fill="#c6d0d7" stroke="#7d8a94" stroke-width=".09"/>`; }

  // ---- back of the site: fences, the office with the permit on its door, a toilet, bars on the ground
  o += fence([XF, Y0 + 1], [XR, Y0 + 1]) + fence([XF, Y0 + 1], [XF, YF]);
  const ox = w + 1.2, oy = Y0 + 1.5, ow = Math.min(6, XR - ox - .4);
  shadow(ox, oy, ow, 3, 2.85); shadow(XF + .8, Y0 + 2, 1.3, 1.3, 2.3);
  o += box(ox, oy, 0, ow, 3, 2.7, ['#f6f4f0', '#e4e0da', '#bdb7ae']) + box(ox - .1, oy - .1, 2.7, ow + .2, 3.2, .15, ['#d8d3cc', '#c9c3bb', '#a9a299']);
  for (let k = 0; k < 2; k++) o += poly([[ox + .7 + k * 2.2, oy + 3, 1], [ox + 2 + k * 2.2, oy + 3, 1], [ox + 2 + k * 2.2, oy + 3, 2.1], [ox + .7 + k * 2.2, oy + 3, 2.1]], '#4b5b68');
  o += poly([[ox + ow, oy + .8, 0], [ox + ow, oy + 1.9, 0], [ox + ow, oy + 1.9, 2.1], [ox + ow, oy + .8, 2.1]], '#56636e') + poly([[ox + ow + .02, oy + 1.05, 1.2], [ox + ow + .02, oy + 1.55, 1.2], [ox + ow + .02, oy + 1.55, 1.85], [ox + ow + .02, oy + 1.05, 1.85]], '#ffffff') + line([[ox + ow + .03, oy + 1.12, 1.7], [ox + ow + .03, oy + 1.48, 1.7]], '#e8784a', .05) + line([[ox + ow + .03, oy + 1.12, 1.5], [ox + ow + .03, oy + 1.4, 1.5]], '#9aa0a5', .04);
  o += box(XF + .8, Y0 + 2, 0, 1.3, 1.3, 2.3, ['#6ea1c7', '#4d86b0', '#3a6c92']);
  for (let k = 0; k < 7; k++) o += line([[-2.8 + k * .2, 1.5, .2 + (k % 2) * .12], [-2.8 + k * .2, Math.max(4, d - 1), .2 + (k % 2) * .12]], K.steel, .09);
  // the building's own shadow, and the contact shadow at its foot
  shadow(0, 0, w, d, roof);
  o += poly([[-1.2, -1.2, 0], [w + 1.6, -1.2, 0], [w + 1.6, d + 1.6, 0], [-1.2, d + 1.6, 0]], 'rgba(40,30,20,.18)', ' filter="url(#iso-ao)"');

  // ---- the building, storey by storey
  const winRow = (z0, above) => {
    let r = ''; const zb = z0 + hf * .3, zt2 = z0 + hf * .8, zr = zb + (zt2 - zb) * .62;
    const facade = (len, q) => {
      if (F.glass) { const m = Math.max(2, Math.round(len / 1.6)); for (let k = 1; k < m; k++) r += line([q(k * len / m, z0 + .3), q(k * len / m, z0 + hf)], 'rgba(255,255,255,.35)', .05); r += poly([q(0, z0 + hf * .55), q(len * .35, z0 + hf * .95), q(len * .5, z0 + hf * .95), q(len * .15, z0 + hf * .55)], 'rgba(255,255,255,.12)'); return; }
      if (F.ribs) { for (let u = .6; u < len; u += .9) r += line([q(u, z0 + .3), q(u, z0 + hf)], 'rgba(0,0,0,.08)', .06); return; }
      if (F.ribbon) { r += poly([q(.8, zb), q(len - .8, zb), q(len - .8, zt2), q(.8, zt2)], F.win); for (let u = 2.4; u < len - .8; u += 1.6) r += line([q(u, zb), q(u, zt2)], 'rgba(255,255,255,.28)', .06); return; }
      const m = Math.max(1, Math.floor(len / 3.2)), pitch = len / m;
      for (let k = 0; k < m; k++) { const ww = pitch * (k % 3 === 1 ? .3 : .6), a = k * pitch + (pitch - ww) / 2; r += poly([q(a, zb), q(a + ww, zb), q(a + ww, zt2), q(a, zt2)], F.win) + poly([q(a, zr), q(a + ww * .45, zt2), q(a + ww * .7, zt2), q(a + ww * .25, zr)], 'rgba(255,255,255,.14)'); }
    };
    facade(w, (u, z) => [u, d, z]); facade(d, (u, z) => [w, d - u, z]);
    if (z0 > 0) { const lc = above ? ['#f6c7ab', '#eea37f', K.accD] : [F.band, F.band, F.wall[2]]; r += poly([[-.14, d + .14, z0 - .05], [w + .14, d + .14, z0 - .05], [w + .14, d + .14, z0 + .25], [-.14, d + .14, z0 + .25]], lc[1]) + poly([[w + .14, -.14, z0 - .05], [w + .14, d + .14, z0 - .05], [w + .14, d + .14, z0 + .25], [w + .14, -.14, z0 + .25]], lc[2]); }
    else r += poly([[0, d, 0], [w, d, 0], [w, d, .3], [0, d, .3]], 'rgba(0,0,0,.14)') + poly([[w, 0, 0], [w, d, 0], [w, d, .3], [w, 0, .3]], 'rgba(0,0,0,.2)');
    return r;
  };
  const hits = [];
  for (let i = 0; i < n; i++) {
    const z0 = i * hf, z1 = z0 + hf, above = s.over && i + 1 >= fl, top = i === n - 1;
    hits.push([i, [[w, 0, z1], [w, 0, z0], [w, d, z0], [0, d, z0], [0, d, z1], [w, d, z1]]]);
    if (i < fin) {
      if (z0 > 0) o += poly([[-.14, -.14, z0 + .25], [w + .14, -.14, z0 + .25], [w + .14, d + .14, z0 + .25], [-.14, d + .14, z0 + .25]], above ? '#f6c7ab' : F.band);
      o += box(0, 0, z0, w, d, hf, F.wall) + winRow(z0, above);
      if (i === 0 && !F.ribs) {
        o += poly([[w, 0, .3], [w, d, .3], [w, d, hf * .78], [w, 0, hf * .78]], '#2f3c47') + poly([[w, d * .1, hf * .5], [w, d * .3, hf * .78], [w, d * .42, hf * .78], [w, d * .22, hf * .5]], 'rgba(255,255,255,.08)');
        o += poly([[w * .08, d, .3], [w * .92, d, .3], [w * .92, d, hf * .78], [w * .08, d, hf * .78]], '#394652') + poly([[w * .08, d, hf * .5], [w * .3, d, hf * .78], [w * .42, d, hf * .78], [w * .2, d, hf * .5]], 'rgba(255,255,255,.1)');
        for (let u = w * .08 + 1.6; u < w * .92; u += 1.6) o += line([[u, d, .3], [u, d, hf * .78]], 'rgba(255,255,255,.3)', .05);
        o += poly([[w * .32, d + .01, hf * .52], [w * .68, d + .01, hf * .52], [w * .68, d + .01, hf * .8], [w * .32, d + .01, hf * .8]], 'rgba(10,15,20,.28)') + box(w * .32, d, hf * .8, w * .36, 1.3, .38, ['#9f9285', '#8c7f73', '#6f6459']) + line([[w * .34, d, hf * .62], [w * .34, d + 1.2, hf * .8]], '#5b5f63', .09) + line([[w * .66, d, hf * .62], [w * .66, d + 1.2, hf * .8]], '#5b5f63', .09);
      }
      if (i === 0 && F.sign) o += poly([[w * .1, d, z0 + hf * .84], [w * .3, d, z0 + hf * .84], [w * .3, d, z0 + hf * .98], [w * .1, d, z0 + hf * .98]], K.acc);
      if (i === 0 && F.ribs) o += poly([[w * .15, d, 0], [w * .15 + 4.5, d, 0], [w * .15 + 4.5, d, 4.2], [w * .15, d, 4.2]], '#8e9296') + [1, 2, 3, 4, 5, 6].map(k => line([[w * .15, d, k * .6], [w * .15 + 4.5, d, k * .6]], 'rgba(0,0,0,.18)', .05)).join('');
      if (F.balc && i > 0) { const m2 = Math.max(1, Math.floor(d / 3.2)), pt = d / m2; for (let k = 1; k < m2; k += 2) { const a = k * pt + pt * .12; o += poly([[w + .01, a, z0 - .6], [w + .01, a + pt * .76, z0 - .6], [w + .01, a + pt * .76, z0], [w + .01, a, z0]], 'rgba(40,30,20,.14)') + box(w, a, z0, 1.1, pt * .76, .24, ['#f1ede7', '#d8d1c7', '#b7ad9f']) + line([[w + 1.1, a, z0 + 1], [w + 1.1, a + pt * .76, z0 + 1]], '#6f757b', .07) + line([[w + 1.1, a, z0 + .24], [w + 1.1, a + pt * .76, z0 + .24]], 'rgba(0,0,0,.25)', .05); } }
      if (F.balc && i > 0) { const m = Math.max(1, Math.floor(w / 3.2)), pitch = w / m; for (let k = 0; k < m; k += 2) { const a = k * pitch + pitch * .12; o += poly([[a, d + .01, z0 - .6], [a + pitch * .76, d + .01, z0 - .6], [a + pitch * .76, d + .01, z0], [a, d + .01, z0]], 'rgba(40,30,20,.14)') + box(a, d, z0, pitch * .76, 1.1, .24, ['#f1e8dc', '#dccfbe', '#bfae98']) + line([[a, d + 1.1, z0 + 1], [a + pitch * .76, d + 1.1, z0 + 1]], '#6f757b', .07) + line([[a + pitch * .76, d + 1.1, z0 + 1], [a + pitch * .76, d, z0 + 1]], '#6f757b', .07); } }
      if (i === n - 1 && F.ribs) { for (let u = 1; u < w; u += 1.4) o += line([[u, 0, z1], [u, d, z1]], 'rgba(0,0,0,.07)', .06); for (let u = w * .15; u < w * .85; u += w * .14) o += poly([[u, d * .3, z1], [u + 2.4, d * .3, z1], [u + 2.4, d * .7, z1], [u, d * .7, z1]], 'rgba(150,190,215,.6)'); }
      if (i === fin - 1 && F.cross) { const cy2 = d * .5, cz = z0 + hf * .5; o += poly([[w, cy2 - 1.2, cz - 1.2], [w, cy2 + 1.2, cz - 1.2], [w, cy2 + 1.2, cz + 1.2], [w, cy2 - 1.2, cz + 1.2]], '#2f8c84') + poly([[w, cy2 - .3, cz - .9], [w, cy2 + .3, cz - .9], [w, cy2 + .3, cz + .9], [w, cy2 - .3, cz + .9]], '#fff') + poly([[w, cy2 - .9, cz - .3], [w, cy2 + .9, cz - .3], [w, cy2 + .9, cz + .3], [w, cy2 - .9, cz + .3]], '#fff'); }
      continue;
    }
    // open frame: the far walls of the storey in deep shadow, the floor in the slab's shade, perimeter columns, the slab above
    const cols = []; const gx = grid(w, 6), gy = grid(d, 6);
    gx.forEach(x => { cols.push([x, 0]); cols.push([x, d - .5]); }); gy.slice(1, -1).forEach(y => { cols.push([0, y]); cols.push([w - .5, y]); });
    cols.sort((a, b) => a[0] + a[1] - b[0] - b[1]);
    if (i === fin && fin > 0) o += poly([[-.1, d + .1, z0 - .4], [w + .1, d + .1, z0 - .4], [w + .1, d + .1, z0], [-.1, d + .1, z0]], above ? '#f2ae8a' : K.con[1]) + poly([[w + .1, -.1, z0 - .4], [w + .1, d + .1, z0 - .4], [w + .1, d + .1, z0], [w + .1, -.1, z0]], above ? '#e0916a' : K.con[2]);
    if (!top) {
      o += poly([[0, 0, z0], [0, d, z0], [0, d, z1], [0, 0, z1]], 'rgba(46,40,36,.6)') + poly([[0, 0, z0], [w, 0, z0], [w, 0, z1], [0, 0, z1]], 'rgba(30,26,23,.68)') + poly([[0, 0, z0], [w, 0, z0], [w, d, z0], [0, d, z0]], 'rgba(40,34,30,.5)');
      cols.forEach(([x, y]) => { o += box(x - .05, y - .05, z0, .6, .6, hf - .4, K.col); });
      o += box(-.1, -.1, z1 - .4, w + .2, d + .2, .4, above ? [K.con[0], '#f2ae8a', '#e0916a'] : K.con);
      continue;
    }
    // the storey being built: formwork walls, bars in the slab, columns in timber or bare concrete, starter bars, the crew
    o += box(0, 0, z0, w * .62, .3, 1.2, K.wood) + box(0, 0, z0, .3, d * .7, 1.2, K.wood);
    for (let u = 0; u <= w * .62; u += .9) o += line([[u, .3, z0], [u, .3, z0 + 1.2]], 'rgba(0,0,0,.12)', .04);
    const mx0 = w * .4, my1 = d * .62;
    for (let x = mx0; x <= w - .8; x += .8) o += line([[x, .8, z0 + .1], [x, my1, z0 + .1]], K.steel, .035, ' opacity=".7"');
    for (let y = .8; y <= my1; y += .8) o += line([[mx0, y, z0 + .1], [w - .8, y, z0 + .1]], K.steel, .035, ' opacity=".7"');
    cols.forEach(([x, y], k) => {
      const hc = k % 3 === 2 ? hf * .45 : hf * .9;
      if (k % 3 === 1) o += box(x - .22, y - .22, z0, .94, .94, hc, K.wood) + line([[x - .22, y + .72, z0 + hc * .5], [x + .72, y + .72, z0 + hc * .5]], 'rgba(0,0,0,.18)', .05);
      else o += box(x - .05, y - .05, z0, .6, .6, hc, K.col);
      for (const [ax, ay] of [[.08, .08], [.42, .08], [.08, .42], [.42, .42]]) o += line([[x + ax, y + ay, z0 + hc], [x + ax, y + ay, z0 + hc + 1.2]], K.steel, .06);
    });
    o += box(w * .08, d * .2, z0, 2.4, 1.3, .9, K.wood) + box(w * .08 + .1, d * .2 + .1, z0 + .9, 2.2, 1.1, .5, K.wood);
    o += box(w * .22, d * .45, z0, Math.min(5, w * .22), .3, 1.7, K.wood) + box(w * .5, d * .82, z0, Math.min(4.4, w * .2), .3, 1.5, K.wood);
    for (let k = 0; k < 4; k++) o += line([[w * .12, d * .9 - k * .22, z0 + .15], [w * .12 + 4, d * .9 - k * .22, z0 + .15]], K.steel, .1);
    o += man(w * .55, d * .4, z0, 0, 1, 1) + man(w * .7, d * .52, z0, 1, -1, 2) + man(w * .3, d * .72, z0, 1);
  }
  if (!skel) o += box(w * .1, d * .15, roof, 2.2, 1.6, 1.4, ['#c9c4bc', '#b3ada4', '#9a948b']) + box(w * .55, d * .3, roof, 1.6, 1.6, .5, K.wood) + man(w * .35, d * .6, roof, 0) + man(w * .7, d * .55, roof, 1, -1, 2);
  // ghost floors: what is still missing to reach 2.000 m², or what the lot allows
  const ghostTo = (!s.over && isFinite(need) && need > n) ? Math.min(need, n * 3 + 6) : 0;
  if (ghostTo) {
    const z0 = roof, z1 = ghostTo * hf, g = ' stroke-dasharray=".9 .6"', st = s.amp ? K.acc : '#8e877f';
    o += line([[0, d, z0], [0, d, z1], [w, d, z1], [w, 0, z1], [w, 0, z0]], st, .16, g) + line([[w, d, z0], [w, d, z1]], st, .16, g) + line([[0, d, z1], [0, 0, z1], [w, 0, z1]], st, .16, g);
    for (let i = n + 1; i < ghostTo; i++) o += line([[0, d, i * hf], [w, d, i * hf], [w, 0, i * hf]], st, .08, g);
  }
  // ---- the open storeys wear the site's safety mesh on the front face, on a few standards; the slab edges show through it
  const zs = fin * hf, zTop = roof + (skel ? 1 : 0);
  if (skel) {
    const ym = d + .9, step = Math.max(3.6, w / Math.max(1, Math.round(w / 4.6)));
    for (let u = 0; u <= w + .01; u += step) o += line([[u, ym, zs], [u, ym, zTop]], '#7d858b', .08);
    const H = zTop - zs, net = (len, at) => { let r = ''; for (let t = -H; t < len; t += .7) { const a0 = Math.max(0, t), a1 = Math.min(len, t + H); if (a1 > a0) { r += line([at(a0, zs + (a0 - t)), at(a1, zs + (a1 - t))], 'rgba(55,95,95,.42)', .03); const b0 = Math.max(0, t), b1 = Math.min(len, t + H); r += line([at(b0, zTop - (b0 - t)), at(b1, zTop - (b1 - t))], 'rgba(55,95,95,.42)', .03); } } return r; };
    o += poly([[0, ym, zs], [w, ym, zs], [w, ym, zTop], [0, ym, zTop]], 'rgba(100,150,150,.1)') + net(w, (u, z) => [u, ym, z]) + line([[0, ym, zTop], [w, ym, zTop]], '#7d858b', .08);
    for (let i = fin; i <= n; i++) o += line([[0, ym, i * hf + .02], [w, ym, i * hf + .02]], 'rgba(90,100,105,.35)', .05);
    const xm = w + .9; o += poly([[xm, d * .45, zs], [xm, d, zs], [xm, d, zTop], [xm, d * .45, zTop]], 'rgba(90,140,140,.14)') + net(d * .55, (u, z) => [xm, d - u, z]) + line([[xm, d * .45, zs], [xm, d * .45, zTop]], '#7d858b', .08) + line([[xm, d, zs], [xm, d, zTop]], '#7d858b', .08) + line([[xm, d * .45, zTop], [xm, d, zTop]], '#7d858b', .08);
  }
  if (s.over && fl - 1 < n) { const z = (fl - 1) * hf + .02, e2 = .16, tg = P(w + e2, d + e2, z); o += line([[-e2, d + e2, z], [w + e2, d + e2, z], [w + e2, -e2, z]], K.acc, .3) + `<g transform="translate(${f(tg[0])} ${f(tg[1])})"><rect x="-3.9" y="-1.1" width="7.8" height="2.2" rx="1.1" fill="${K.acc}" stroke="#fff" stroke-width=".3"/><text x="0" y=".52" text-anchor="middle" font-size="1.45" font-weight="700" fill="#fff">2.000 m²</text></g>`; }
  // ---- tower crane in the front yard; its jib runs at 45° over the roof, which in this projection draws it level
  const cx = -1.9, cy = d + 3.4, Hm = Math.max(roof + 8, 16), yel = K.yel[1], u2 = Math.SQRT1_2, zj = Hm + .9;
  const Lu = Math.max(8, w * .82 - cx - 1), Tu = Lu * .62, Cu = 7.5;
  const J = (t, off, z) => [cx + 1 + t, cy + 1 + off, z]; // along the jib (x) and across it (y)
  shadow(cx - 1, cy - 1, 4, 4, 1); shadow(cx, cy, 2, 2, Hm * .55);
  o += box(cx - 1.2, cy - 1.2, 0, 4.4, 4.4, 1.2, ['#ece7df', '#c6beb2', '#978d80']) + box(cx - 1, cy + 2.3, 1.2, 4, .9, .7, ['#bdb5aa', '#a39a8e', '#7f766b']) + box(cx + 2.3, cy - 1, 1.2, .9, 3.2, .7, ['#bdb5aa', '#a39a8e', '#7f766b']);
  [[cx, cy], [cx + 2, cy], [cx + 2, cy + 2], [cx, cy + 2]].forEach(([x, y], k) => { o += line([[x, y, 1], [x, y, Hm]], k === 2 ? K.yel[0] : k ? yel : K.yel[2], .3); });
  for (let z = 1, k = 0; z < Hm - .1; z += 2, k++) { const z2 = Math.min(Hm, z + 2); o += line([[cx + 2, cy + (k % 2 ? 2 : 0), z], [cx + 2, cy + (k % 2 ? 0 : 2), z2]], K.yel[2], .13) + line([[cx + (k % 2 ? 2 : 0), cy + 2, z], [cx + (k % 2 ? 0 : 2), cy + 2, z2]], yel, .13) + line([[cx + 2, cy, z], [cx + 2, cy + 2, z], [cx, cy + 2, z]], yel, .1); }
  o += box(cx - .3, cy - .3, Hm, 2.6, 2.6, .9, K.yel);
  o += line([J(-Cu, -.6, zj), J(Lu, -.6, zj)], K.yel[2], .26) + line([J(-Cu, .6, zj), J(Lu, .6, zj)], K.yel[0], .28) + line([J(-1, 0, zj + 1.5), J(Lu - 1, 0, zj + 1.5)], yel, .24);
  for (let t = 1; t < Lu - 1.5; t += 1.6) o += line([J(t, .6, zj), J(t + .8, 0, zj + 1.5), J(t + 1.6, .6, zj)], yel, .1);
  for (let t = -1; t > -Cu + .5; t -= 1.6) o += line([J(t, .6, zj), J(t - .8, -.6, zj), J(t - 1.6, .6, zj)], yel, .1);
  o += box(cx + 1 - Cu, cy + .2, zj - 1.5, 2.2, 1.6, 1.9, ['#b9b3aa', '#9b958c', '#7b756c']) + line([[cx + 1 - Cu, cy + 1.8, zj - .55], [cx + 3.2 - Cu, cy + 1.8, zj - .55]], 'rgba(0,0,0,.25)', .06);
  o += line([[cx + 1, cy + 1, Hm + .9], [cx + 1, cy + 1, Hm + 5.5]], yel, .22) + line([J(Lu * .55, 0, zj + 1.5), [cx + 1, cy + 1, Hm + 5.5], J(-Cu + .5, 0, zj)], '#8a8279', .045);
  o += box(cx + 2.1, cy + .2, Hm - .9, 1.6, 1.8, 1.8, K.yel) + poly([[cx + 3.7, cy + .4, Hm - .2], [cx + 3.7, cy + 1.8, Hm - .2], [cx + 3.7, cy + 1.8, Hm + .7], [cx + 3.7, cy + .4, Hm + .7]], '#2f3a44');
  { const tp = J(Tu, 1.2, zj - .2), tr = P(tp[0], tp[1], tp[2]), hz = roof + 2.2;
    sh += poly([[tp[0] - 1.7 + hz * SX, tp[1] - .8, 0], [tp[0] + 1.7 + hz * SX, tp[1] - .8, 0], [tp[0] + 1.7 + hz * SX, tp[1] + .8, 0], [tp[0] - 1.7 + hz * SX, tp[1] + .8, 0]], 'rgba(0,0,0,.7)');
    o += box(tp[0] - .5, tp[1] - .5, zj - .55, 1, 1, .4, K.dark);
    o += `<g id="iso-hook" data-o="${f(tr[0])} ${f(tr[1])}">` + line([[tp[0], tp[1], zj - .55], [tp[0], tp[1], hz + 1.6]], '#2b2724', .09) + box(tp[0] - .25, tp[1] - .25, hz + 1.1, .5, .5, .5, K.yel) + line([[tp[0], tp[1], hz + 1.1], [tp[0] - 1.6, tp[1] - .7, hz + .6]], '#2b2724', .05) + line([[tp[0], tp[1], hz + 1.1], [tp[0] + 1.6, tp[1] + .7, hz + .6]], '#2b2724', .05) + box(tp[0] - 1.7, tp[1] - .8, hz - .3, 3.4, 1.6, .9, K.wood) + line([[tp[0] - 1.7, tp[1] + .8, hz + .15], [tp[0] + 1.7, tp[1] + .8, hz + .15]], 'rgba(0,0,0,.18)', .05) + '</g>'; }

  // ---- the right yard: a mixer truck, its drum turning, and a stack of pipes
  { const mx = w + 2.4, my = Math.max(Y0 + 5.2, d * .3); shadow(mx, my, 2, 6.4, 2.4); }
  { const mx = w + 2.4, my = Math.max(Y0 + 5.2, d * .3), dr = P(mx + 1, my + 1, 2), dr2 = P(mx + 1, my + 4.4, 1.5);
    o += box(mx, my, .5, 2, 5.9, .4, ['#8e8780', '#6f6a64', '#57524d']) + box(mx + .1, my + 4.9, .9, 1.8, 1.4, 1.6, ['#f4f1ec', '#ebe6de', '#d2ccc2']) + poly([[mx + .3, my + 6.3, 1.7], [mx + 1.7, my + 6.3, 1.7], [mx + 1.7, my + 6.3, 2.3], [mx + .3, my + 6.3, 2.3]], '#34414c');
    for (const yy of [my + 1, my + 2.9, my + 5.8]) for (const xx of [mx - .02, mx + 2.02]) { const q = P(xx, yy, .45); o += `<ellipse cx="${f(q[0])}" cy="${f(q[1])}" rx=".5" ry=".48" fill="#2a2725"/><ellipse cx="${f(q[0])}" cy="${f(q[1])}" rx=".2" ry=".19" fill="#8a8279"/>`; }
    o += `<path d="M${f(dr[0])} ${f(dr[1])}L${f(dr2[0])} ${f(dr2[1])}" stroke="#e9e5de" stroke-width="1.85" stroke-linecap="round"/><path d="M${f(dr[0])} ${f(dr[1])}L${f(dr2[0])} ${f(dr2[1])}" stroke="#7d93a6" stroke-width="1.85" stroke-dasharray=".7 1.1" opacity=".9" class="drum"/><path d="M${f(dr[0] - .3)} ${f(dr[1] - .7)}L${f(dr2[0] - .3)} ${f(dr2[1] - .7)}" stroke="rgba(255,255,255,.55)" stroke-width=".35" stroke-linecap="round"/>`;
    o += man(mx + 3.4, my + 1.6, 0, 0, -1, 1); }
  for (let k = 0; k < 6; k++) { const a = P(w + 5.6 + (k % 3) * .45, d + 1.5, .25 + Math.floor(k / 3) * .4), b = P(w + 5.6 + (k % 3) * .45, d + 5.5, .25 + Math.floor(k / 3) * .4); o += `<path d="M${f(a[0])} ${f(a[1])}L${f(b[0])} ${f(b[1])}" stroke="#7c8791" stroke-width=".42" stroke-linecap="round"/><path d="M${f(a[0])} ${f(a[1] - .1)}L${f(b[0])} ${f(b[1] - .1)}" stroke="#aab4bc" stroke-width=".12" stroke-linecap="round"/>`; }

  // ---- the front yard: an excavator at its spoil heap, pallets of block and timber, a skid steer, bars, a wheelbarrow, the crew
  const ex = Math.max(4.8, w * .2), ey = d + 4.3;
  shadow(ex, ey, 5, 3, 3.3);
  o += box(ex, ey, 0, 5, 3, .9, K.dark) + line([[ex + .45, ey + 3, .82], [ex + 4.55, ey + 3, .82]], 'rgba(255,255,255,.18)', .06);
  for (const xx of [ex + .45, ex + 4.55]) { const q = P(xx, ey + 3, .45); o += `<ellipse cx="${f(q[0])}" cy="${f(q[1])}" rx=".42" ry=".4" fill="#57524d" stroke="#25211e" stroke-width=".06"/>`; }
  o += box(ex + .7, ey + .3, .9, 3.2, 2.4, 1.2, K.yel) + box(ex + .7, ey + 1.5, 2.1, 1.5, 1.2, 1.6, K.yel) + poly([[ex + .8, ey + 2.7, 2.4], [ex + 2.1, ey + 2.7, 2.4], [ex + 2.1, ey + 2.7, 3.5], [ex + .8, ey + 2.7, 3.5]], '#2f3a44');
  { const b = P(ex + 10.2, ey + 1.6, 0); o += `<ellipse cx="${f(b[0])}" cy="${f(b[1])}" rx="2.6" ry="1.2" fill="#8f6440"/><path d="M${f(b[0] - 2.5)} ${f(b[1])}C${f(b[0] - 1.6)} ${f(b[1] - 1.2)} ${f(b[0] - .9)} ${f(b[1] - 2.3)} ${f(b[0] - .1)} ${f(b[1] - 2.3)}C${f(b[0] + .9)} ${f(b[1] - 2.3)} ${f(b[0] + 1.7)} ${f(b[1] - 1.1)} ${f(b[0] + 2.5)} ${f(b[1])}Z" fill="#a8774b"/><path d="M${f(b[0] - .1)} ${f(b[1] - 2.3)}C${f(b[0] + .9)} ${f(b[1] - 2.3)} ${f(b[0] + 1.7)} ${f(b[1] - 1.1)} ${f(b[0] + 2.5)} ${f(b[1])}L${f(b[0] + .6)} ${f(b[1] + .5)}Z" fill="rgba(60,35,15,.25)"/>`; }
  { const b1 = P(ex + 3.6, ey + 1, 2), b2 = P(ex + 6.4, ey + 1, 5), b3 = P(ex + 9, ey + 1, 1.6), bk = P(ex + 9, ey + 1, .3);
    o += `<path d="M${f(b1[0])} ${f(b1[1])}L${f(b2[0])} ${f(b2[1])}L${f(b3[0])} ${f(b3[1])}" fill="none" stroke="${K.yel[2]}" stroke-width=".62" stroke-linejoin="round" stroke-linecap="round"/><path d="M${f(b1[0])} ${f(b1[1] - .12)}L${f(b2[0])} ${f(b2[1] - .12)}L${f(b3[0])} ${f(b3[1] - .12)}" fill="none" stroke="${K.yel[0]}" stroke-width=".28" stroke-linejoin="round" stroke-linecap="round"/><path d="M${f(b3[0] - .7)} ${f(b3[1])}l1.4 .1l-.3 ${f(bk[1] - b3[1])}l-1 -.1z" fill="${K.dark[0]}"/>`; }
  shadow(w - 3.2, d + 2.4, 2.4, 1.6, 1.3);
  o += box(w - 3.2, d + 2.4, 0, 2.4, 1.6, .7, K.wood) + box(w - 3.1, d + 2.5, .7, 2.2, 1.4, .6, K.wood);
  o += man(w * .5, d + 2.8, 0, 0, 1, 2) + man(w - 1.2, d + 3.4, 0, 1);
  // ---- the street edge: the licence board on the fence, the gate, a lamp, the fence, trees
  const vx = Math.max(ex + 12.5, w * .55), vy = YF - .2;
  o += line([[vx, vy, 0], [vx, vy, 3.5]], '#6b6f73', .12) + line([[vx + 5, vy, 0], [vx + 5, vy, 3.5]], '#6b6f73', .12);
  o += poly([[vx - .2, vy, 1.5], [vx + 5.2, vy, 1.5], [vx + 5.2, vy, 3.6], [vx - .2, vy, 3.6]], '#fbfaf8') + poly([[vx - .2, vy, 3.15], [vx + 5.2, vy, 3.15], [vx + 5.2, vy, 3.6], [vx - .2, vy, 3.6]], K.acc);
  for (let k = 0; k < 4; k++) o += line([[vx + .3, vy, 2.8 - k * .3], [vx + (k === 3 ? 2.6 : 4.4), vy, 2.8 - k * .3]], '#b0aaa2', .09);
  const g0 = XF + (XR - XF) * .74, g1 = XF + (XR - XF) * .86;
  o += fence([XF, YF], [XR, YF], [.74, .86]) + fence([XR, Y0 + 1], [XR, YF]);
  o += line([[g0, YF, 0], [g0, YF, 2.3]], '#4e5357', .16) + line([[g1, YF, 0], [g1, YF, 2.3]], '#4e5357', .16) + poly([[g0, YF, .2], [g0 + 1.2, YF + 2.6, .2], [g0 + 1.2, YF + 2.6, 1.9], [g0, YF, 1.9]], 'rgba(110,118,126,.22)') + line([[g0, YF, 1.9], [g0 + 1.2, YF + 2.6, 1.9]], K.fence, .1);
  o += palm(X0 + 2.2, Y1 - 1, .95) + palm(X0 + (X1 - X0) * .95, Y1 - 1, 1.05) + tree(X0 + (X1 - X0) * .8, Y1 - 1, .95) + tree(X1 - 1, d * .55, 1);

  { const tp2 = P(0, d, roof + (skel ? 1.2 : .3)), ta = P(w * .5, d + 1.9, 0), per = Math.round(s.area / s.pisos).toLocaleString('es-CO');
    o += `<g class="tag-p" transform="translate(${f(tp2[0])} ${f(tp2[1] - 1.4)})"><rect x="-5.8" y="-1.1" width="11.6" height="2.2" rx="1.1" fill="#0f0e0d"/><text x="0" y=".52" text-anchor="middle" font-size="1.45" font-weight="700" fill="#fff">${n} ${n === 1 ? 'piso' : 'pisos'} · ${roof.toFixed(1).replace('.', ',')} m</text></g>`;
    o += `<g class="tag-a" transform="translate(${f(ta[0])} ${f(ta[1] + 1.6)})"><rect x="-6.8" y="-1.1" width="13.6" height="2.2" rx="1.1" fill="#0f0e0d"/><text x="0" y=".52" text-anchor="middle" font-size="1.45" font-weight="700" fill="#fff">${per} m² por piso</text></g>`; }
  // ---- what the callouts and milestones point at, and the model's extent for the camera
  const band = (z0, z1) => Iso.pts([[w, 0, z1], [w, 0, z0], [w, d, z0], [0, d, z0], [0, d, z1], [w, d, z1]]);
  const RG = {h1: Iso.pts([[vx - .2, vy, 1.5], [vx + 5.2, vy, 1.5], [vx + 5.2, vy, 3.6], [vx - .2, vy, 3.6]]), h2: skel ? band(fin * hf, roof) : band(0, roof), h3: fin ? band(0, fin * hf) : ''};
  const zU = s.over ? Math.max(0, (fl - 1) * hf) : ghostTo ? ghostTo * hf : roof;
  const A = {
    umbral: [w + .16, -.16, zU], firmas: [ox + ow, oy + 3, 2.85],
    h1: [X1, Y0 + 3, -1.7], h2: [w, 0, skel ? fin * hf + skel * hf * .5 : roof * .7], h3: [w, 0, fin ? fin * hf * .45 : hf * .4]
  };
  const ext = [[X0, Y0, 0], [X1, Y0, 0], [X1, Y1, 0], [X0, Y1, 0], [0, 0, Math.max(roof, ghostTo * hf) + 1.5], [w, 0, Math.max(roof, ghostTo * hf) + 1.5], J(Lu, 0, zj), J(-Cu, 0, zj)], top = P(cx + 1, cy + 1, Hm + 5.5)[1];
  let bx0 = 1e9, by0 = 1e9, bx1 = -1e9, by1 = -1e9; ext.forEach(p => { const q = P(p[0], p[1], p[2]); bx0 = Math.min(bx0, q[0]); bx1 = Math.max(bx1, q[0]); by0 = Math.min(by0, q[1]); by1 = Math.max(by1, q[1]); });
  const hit = hits.map(([i, a]) => `<polygon data-i="${i + 1}" points="${Iso.pts(a)}"/>`).join('');
  const lot = Iso.pts([[X0 - 14, Y0 - 14, 0], [X1 + 14, Y0 - 14, 0], [X1 + 14, Y1 + 14, 0], [X0 - 14, Y1 + 14, 0]]);
  o = o.replace('<!--SH-->', `<clipPath id="iso-cl"><polygon points="${lot}"/></clipPath><g clip-path="url(#iso-cl)"><g opacity=".36">${sh}</g></g>`);
  let fx0 = 1e9, fy0 = 1e9, fx1 = -1e9, fy1 = -1e9;
  [[0, d, 0], [w, d, 0], [w, 0, 0], [0, 0, 0], [0, 0, Math.max(roof, ghostTo * hf) + 1.5], [w, 0, Math.max(roof, ghostTo * hf) + 1.5], [w, d, Math.max(roof, ghostTo * hf) + 1.5], J(Lu, 0, zj), J(-Cu, 0, zj), [cx + 1, cy + 1, 0]].forEach(p => { const q = P(p[0], p[1], p[2]); fx0 = Math.min(fx0, q[0]); fx1 = Math.max(fx1, q[0]); fy0 = Math.min(fy0, q[1]); fy1 = Math.max(fy1, q[1]); });
  return {svg: o, ground, city, ckey, gkey, focus: [fx0, fy0, fx1, fy1], A, R: RG, box: [bx0, by0, bx1, by1], core: [P(0, d, 0)[0], P(0, 0, roof)[1], P(w, 0, 0)[0], P(w, d, 0)[1]], top, hit, hits};
}

let lawGen = 0;
// Built only when the section comes near the screen, and when the browser is idle, so opening a page never waits for it
function deferLaw() {
  const g = ++lawGen, f = document.getElementById('ley-form'); if (!f) return;
  let done = false;
  // nor in the middle of a swipe: it waits for the page to come to rest, so its one-off set-up never lands on a moving frame
  const go = () => { if (navBusy) return void navBusy.then(go); if (document.documentElement.classList.contains('is-scrolling')) return void setTimeout(go, 140); if (g === lawGen && document.getElementById('ley-form')) lawAssistant(); }, idle = () => { if (done) return; done = true; io && io.disconnect(); window.requestIdleCallback ? requestIdleCallback(go, {timeout: 450}) : setTimeout(go, 80); };
  const secOf = () => { const f2 = document.getElementById('ley-form'); return f2 && (f2.closest('section') || f2); }, near = () => { const sec = secOf(); if (!sec) return false; const r = sec.getBoundingClientRect(); return r.top < innerHeight + 600 && r.bottom > -600; };
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) idle(); }, {rootMargin: '600px 0px'}) : null;
  setTimeout(() => { if (g !== lawGen) return; if (io && secOf()) io.observe(secOf()); if (near()) idle(); }, 260);
  scrollFns.add(() => { if (!done && g === lawGen && near()) idle(); }); leaveFns.add(() => io && io.disconnect());
}
function lawAssistant() {
  const form = document.getElementById('ley-form'); if (!form) return;
  const iso = document.getElementById('iso'), svg = document.getElementById('iso-svg'), cam = svg.querySelector('#iso-cam'), cam0 = iso.querySelector('#iso-cam0'), cam2 = iso.querySelector('#iso-cam2'), gs = iso.querySelector('#iso-gs'), gc = iso.querySelector('#iso-gc'), sky = iso.querySelector('#iso-sky'), hz = iso.querySelector('#iso-hz'), stage = iso.querySelector('#iso-stage'), bgl = iso.querySelector('.iso-bgl'), hkl = iso.querySelector('.iso-hkl'), world = svg.querySelector('#iso-w'), lead = document.getElementById('iso-lead'), hitG = svg.querySelector('#iso-hit'), hl = svg.querySelector('#iso-hl');
  const rd = document.getElementById('ley-read'), leg = document.getElementById('ley-leg');
  const areaIn = form.querySelector('#ley-area'), pisosIn = form.querySelector('#ley-pisos'), ampIn = form.querySelector('#ley-amp');
  const portal = document.getElementById('portal'), knobs = [[areaIn, document.getElementById('knob-a')], [pisosIn, document.getElementById('knob-p')]];
  const blobEl = document.getElementById('blob');
  { const band = iso.closest('.ley-band'), im = band && band.querySelector(':scope > .ph img');
    const pre = () => { try {
      if (!im || band.classList.contains('pre') || !im.naturalWidth) return;
      const R0 = im.getBoundingClientRect(), nw = im.naturalWidth, nh = im.naturalHeight, kd = Math.max(R0.width / nw, R0.height / nh) || 1, sc = .25, bl = 24 / kd * sc;
      const cv = document.createElement('canvas'), cx = cv.getContext('2d'); if (!cx || !('filter' in cx)) return;
      cv.width = Math.max(8, Math.round(nw * sc)); cv.height = Math.max(8, Math.round(nh * sc)); const pad = bl * 3;
      cx.filter = `blur(${bl.toFixed(2)}px)`; cx.drawImage(im, -pad, -pad, cv.width + 2 * pad, cv.height + 2 * pad);
      if (cx.filter === 'none') return;
      const b = new Image(); b.className = 'ley-pre'; b.alt = ''; b.setAttribute('aria-hidden', 'true'); b.src = cv.toDataURL('image/jpeg', .82);
      (b.decode ? b.decode() : Promise.resolve()).then(() => { if (!band.isConnected) return; im.after(b); band.classList.add('pre'); }).catch(() => {});
    } catch (e) {} };
    if (im) { if (im.complete && im.naturalWidth) pre(); else im.addEventListener('load', pre, {once: true}); } }
  // The opening is placed over the drawing itself (on a phone the verdict sits above it), and its lens is narrower there.
  const blobF = () => stage.getBoundingClientRect().width < 700 ? [.08, .06, .84, .88] : [.10, .13, .52, .72];
  const placeBlob = () => {
    const I = iso.getBoundingClientRect(), S = stage.getBoundingClientRect(), k = I.width / (iso.offsetWidth || I.width) || 1, f = blobF();
    Object.assign(blobEl.style, {left: ((S.left - I.left) / k + f[0] * S.width / k).toFixed(1) + 'px', top: ((S.top - I.top) / k + f[1] * S.height / k).toFixed(1) + 'px', width: (f[2] * S.width / k).toFixed(1) + 'px', height: (f[3] * S.height / k).toFixed(1) + 'px'});
    iso.style.setProperty('--hole', `ellipse(${(52 * f[2]).toFixed(2)}% ${(52 * f[3]).toFixed(2)}% at ${((f[0] + f[2] / 2) * 100).toFixed(2)}% ${((f[1] + f[3] / 2) * 100).toFixed(2)}%)`);
    const z = blobEl._zone; if (z) { z.bev = Math.round(.32 * f[2] * S.width / k); z.margin = z.bev + 20; }
    // the sky is drawn in the opening's own frame (100 = its width); the haze puts the horizon a little above its middle
    const hx = (f[0] + f[2] * .06) * 1000, hW = .88 * f[2] * 1000, hy = (f[1] + f[3] * .06) * 760, hH = .88 * f[3] * 760;
    sky.setAttribute('transform', `translate(${hx.toFixed(1)} ${hy.toFixed(1)}) scale(${(hW / 100).toFixed(3)})`);
    hz.setAttribute('y1', hy.toFixed(1)); hz.setAttribute('y2', (hy + .5 * hH).toFixed(1));
  };
  placeBlob(); addEventListener('resize', placeBlob);
  // the layers follow the drawing wherever the layout moves it (a verdict that wraps to two lines pushes it down on a phone)
  if ('ResizeObserver' in window) { let ro = 0; const o = new ResizeObserver(() => { if (!ro) ro = requestAnimationFrame(() => { ro = 0; placeBlob(); }); }); o.observe(iso); o.observe(stage); }
  if ('IntersectionObserver' in window) new IntersectionObserver(es => iso.classList.toggle('off', !es[es.length - 1].isIntersecting)).observe(iso);
  if (!Glass.attach(blobEl, {tint: 0, frost: 0, margin: 150, bev: 130, blob: true, noDrop: true, noLens: true, into: iso, z: 2, hole: [.92, .89, .85]})) portal.classList.add('pf');
  placeBlob();
  knobs.forEach(([inp, k], i) => { setTimeout(() => { if (!k.isConnected) return; if (!Glass.attach(k, {tint: .06, frost: 0, margin: 46, blurTex: 18})) k.classList.add('kf'); }, 140 + i * 140); inp.addEventListener('pointerdown', () => { if (k._zone) { k._zone.down = true; Glass.kick(); } }); });
  // a knob's centre follows the native thumb's centre (44px thumb, so it travels the track less 44px)
  const knobAt = () => { knobs.forEach(([inp, k]) => { const W = inp.offsetWidth, pc = (inp.value - inp.min) / (inp.max - inp.min), c = pc * (W - 44) + 22; k.style.left = (c - k.offsetWidth / 2).toFixed(1) + 'px'; inp.style.setProperty('--kx', c.toFixed(1) + 'px'); inp.style.setProperty('--kw', (k.offsetWidth / 2 + 3).toFixed(1) + 'px'); }); Glass.kick(); };
  let hotT = 0; const hot = cls => { iso.classList.remove('hot-a', 'hot-p'); iso.classList.add(cls); clearTimeout(hotT); hotT = setTimeout(() => iso.classList.remove(cls), 1600); };
  areaIn.addEventListener('input', () => hot('hot-a')); pisosIn.addEventListener('input', () => hot('hot-p'));
  areaIn.addEventListener('pointerenter', () => hot('hot-a')); pisosIn.addEventListener('pointerenter', () => hot('hot-p'));
  const USO = {viv: ['Vivienda', 'I', 2.7], ofi: ['Oficinas o comercio', 'I', 3.3], ind: ['Industrial o bodega', 'I', 7], cc: ['Centro comercial o de reunión', 'II', 4.5], edu: ['Educativo', 'III', 3.6], sal: ['Salud', 'IV', 4.2]};
  const IMP = {I: ['Ocupación normal', 1], II: ['Ocupación especial', 1.1], III: ['Atención a la comunidad', 1.25], IV: ['Edificación indispensable', 1.5]};
  const n0 = (v, d = 0) => v.toLocaleString('es-CO', {minimumFractionDigits: d, maximumFractionDigits: d});
  const fine = matchMedia('(pointer: fine)').matches;
  // The area slider rides a square-root scale, so the 2.000 m² threshold sits well inside it instead of at its left edge
  const VIV = new Map();
  const viv1 = (r, g, b) => {
    r /= 255; g /= 255; b /= 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b); let h = 0, l = (mx + mn) / 2, sa = 0;
    if (mx !== mn) { const d = mx - mn; sa = l > .5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h /= 6; }
    const mid = 1 - Math.min(1, Math.max(0, (l - .8) / .15)); sa = Math.min(1, sa * (1.5 + 1.5 * mid) + (sa > .02 ? .06 * mid : 0)); l = Math.min(1, Math.max(0, .5 + (l - .5) * 1.12));
    const q = l < .5 ? l * (1 + sa) : l + sa - l * sa, pp = 2 * l - q, f = x => { x = (x + 1) % 1; return x < 1 / 6 ? pp + (q - pp) * 6 * x : x < .5 ? q : x < 2 / 3 ? pp + (q - pp) * (2 / 3 - x) * 6 : pp; };
    return [f(h + 1 / 3), f(h), f(h - 1 / 3)].map(v => Math.round(v * 255));
  };
  const vivid = svgs => svgs.replace(/#([0-9a-f]{6}|[0-9a-f]{3})\b|rgba\((\d+),\s*(\d+),\s*(\d+),/gi, (m, hx, R, G, B) => {
    if (VIV.has(m)) return VIV.get(m);
    let out;
    if (hx) { const h = hx.length === 3 ? hx.replace(/./g, c => c + c) : hx, c = viv1(parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)); out = '#' + c.map(v => v.toString(16).padStart(2, '0')).join(''); }
    else { const c = viv1(+R, +G, +B); out = `rgba(${c[0]},${c[1]},${c[2]},`; }
    VIV.set(m, out); return out;
  });
  const areaOf = () => Math.max(50, Math.round(10 * +areaIn.value / 50) * 50);
  let S = null, scene = null, prevN = null, th = 0, om = 0, swing = 0;
  const state = () => {
    const area = areaOf(), pisos = Math.min(40, Math.max(1, +pisosIn.value || 1)), uso = (form.querySelector('[name=ley-uso]:checked') || {}).value || 'viv', amp = ampIn.checked;
    const [usoTxt, g, hf] = USO[uso], I = IMP[g][1], H = pisos * hf, T = .047 * Math.pow(H, .9), k = T <= .5 ? 1 : T >= 2.5 ? 2 : .75 + .5 * T;
    return {area, pisos, uso, amp, usoTxt, g, hf, I, H, T, k, over: area > 2000, big: area > 2000 || amp};
  };
  const cvx = (s, i) => { let sum = 0; for (let j = 1; j <= s.pisos; j++) sum += Math.pow(j * s.hf, s.k); return Math.pow(i * s.hf, s.k) / sum; };
  // Camera: fits the model into the part of the frame the callouts leave free, and eases there
  let camC = null, camT = null, craf = 0, shown = false;
  const region = () => { const wide = getComputedStyle(iso.querySelector('.iso-cards')).position === 'absolute', c = iso.querySelector('.ic'), cw = c ? c.offsetWidth * 1000 / iso.getBoundingClientRect().width : 220; const f = blobF(), cx = (f[0] + f[2] / 2) * 1000, cy = (f[1] + f[3] / 2) * 760, a = .86 * f[2] / 2 * 1000, b = .86 * f[3] / 2 * 760; return {x: cx - .7 * a, y: cy - .7 * b, w: 1.4 * a, h: 1.4 * b}; };
  const fit = (b, top) => { const R = region(), v0 = Math.min(b[1], top), bw = b[2] - b[0], bh = b[3] - v0, s = Math.min(14, R.w / (bw * 1.28), R.h / (bh * 1.28)); return {s, tx: R.x + R.w / 2 - (b[0] + b[2]) / 2 * s, ty: R.y + R.h / 2 - (v0 + b[3]) / 2 * s}; };
  const camL = [[cam0, bgl], [cam, svg], [cam2, hkl]].map(([g, el]) => ({g, el, b: null}));
  const rebase = (L, c) => { L.b = {...c}; L.g.setAttribute('transform', `translate(${c.tx.toFixed(2)} ${c.ty.toFixed(2)}) scale(${c.s.toFixed(4)})`); };
  const applyCam = () => {
    const kp = (stage.offsetWidth || 1000) / 1000;
    camL.forEach(L => { if (!L.b) rebase(L, camT || camC); const r = camC.s / L.b.s, dx = kp * (camC.tx - r * L.b.tx), dy = kp * (camC.ty - r * L.b.ty);
      L.el.style.transform = Math.abs(r - 1) < 1e-4 && Math.abs(dx) < .05 && Math.abs(dy) < .05 ? '' : `translate(${dx.toFixed(2)}px,${dy.toFixed(2)}px) scale(${r.toFixed(5)})`; });
    leaders();
  };
  const settle = () => camL.forEach(L => { if (L.b && (L.b.s !== camC.s || L.b.tx !== camC.tx || L.b.ty !== camC.ty)) { rebase(L, camC); L.el.style.transform = ''; } });
  // While the camera travels, the drawing's layers keep one rasterisation and are only scaled (will-change); redrawing them at
  // every new scale is what a phone cannot keep up with. They are drawn sharp again where the camera lands.
  const flying = on => camL.forEach(L => { L.el.style.willChange = on ? 'transform' : ''; });
  const camLoop = () => {
    const k = shown === 1 ? .045 : .12; camC.s = Math.exp(Math.log(camC.s) + (Math.log(camT.s) - Math.log(camC.s)) * k); camC.tx += (camT.tx - camC.tx) * k; camC.ty += (camT.ty - camC.ty) * k;
    if (Math.abs(camT.s - camC.s) < camT.s * .001 && Math.abs(camT.tx - camC.tx) < .3 && Math.abs(camT.ty - camC.ty) < .3) { camC = {...camT}; shown = 2; settle(); applyCam(); flying(false); craf = 0; return; }
    applyCam(); craf = requestAnimationFrame(camLoop);
  };
  const aim = () => { camT = fit(scene.focus, scene.top); if (!camC) { const R = region(); camC = {s: camT.s * .34, tx: 0, ty: 0}; const cxw = (scene.box[0] + scene.box[2]) / 2, cyw = (scene.top + scene.box[3]) / 2; camC.tx = R.x + R.w / 2 - cxw * camC.s; camC.ty = R.y + R.h / 2 - cyw * camC.s; applyCam(); }
    if (!shown) return; if (reduce) { camC = {...camT}; settle(); applyCam(); return; } if (!craf) { flying(true); craf = requestAnimationFrame(camLoop); } };
  // The first time the model comes into view, the camera travels in from far away toward the building
  const start = () => { if (shown) return; shown = 1; iso.classList.add('in'); aim(); };
  const inView = () => { const r = iso.getBoundingClientRect(); return r.top < innerHeight * .8 && r.bottom > innerHeight * .15; };
  new IntersectionObserver((es, ob) => { if (es[0].isIntersecting) { ob.disconnect(); start(); } }, {threshold: .25}).observe(iso);
  // Callout leaders: an elbow from each card to what it describes; the milestones follow their anchors along the bottom
  const toV = (x, y) => { const m = svg.getScreenCTM(); return m ? new DOMPoint(x, y).matrixTransform(m.inverse()) : {x, y}; };
  const proj = a => { const q = Iso.P(a[0], a[1], a[2]); return [camC.tx + q[0] * camC.s, camC.ty + q[1] * camC.s]; };
  const cards = [...iso.querySelectorAll('.ic')], hitos = [...iso.querySelectorAll('.iso-hitos p')];
  const L = (d, a, c = '') => `<path class="hal" d="${d}"/><path d="${d}"/><circle class="${c}" cx="${a[0].toFixed(1)}" cy="${a[1].toFixed(1)}" r="3.4"/>`;
  const leaders = () => {
    if (!scene || !camC || getComputedStyle(lead).display === 'none') return;
    // everything is measured first and only then written, so a frame lays the page out once instead of three times per card
    let o = ''; const B = iso.getBoundingClientRect(), k = 1000 / B.width, CB = (cards[0] && cards[0].offsetParent || iso).getBoundingClientRect(), m = svg.getScreenCTM(), mi = m && m.inverse();
    const tv = (x, y) => mi ? new DOMPoint(x, y).matrixTransform(mi) : {x, y};
    // the cards sit in their own column at the right edge, each level with what it names; where two would collide the lower one
    // steps down and its leader takes one elbow on a rail just off the building
    const items = cards.map(el => ({el, a: proj(scene.A[el.dataset.a]), hh: el.offsetHeight, wpx: el.offsetWidth})).sort((p, q) => p.a[1] - q.a[1]);
    const vd = iso.querySelector('.iso-verdict'); let prev = vd ? vd.getBoundingClientRect().bottom - B.top + 18 : 4;
    items.forEach(({el, a, hh, wpx}) => {
      const top = Math.max(a[1] / k - hh / 2, prev), lx = B.width - wpx; prev = top + hh + 14;
      el.style.left = lx.toFixed(1) + 'px'; el.style.top = top.toFixed(1) + 'px';
      const p = tv(CB.left + lx - 4, CB.top + top + hh / 2), xe = a[0] + 18;
      o += L(Math.abs(p.y - a[1]) < 1.5 ? `M${p.x.toFixed(1)} ${p.y.toFixed(1)}H${a[0].toFixed(1)}` : `M${p.x.toFixed(1)} ${p.y.toFixed(1)}H${xe.toFixed(1)}V${a[1].toFixed(1)}H${a[0].toFixed(1)}`, a, el.dataset.a === 'umbral' ? '' : 'n');
    });
    lead.innerHTML = o;
  };
  const hookAt = () => { const h = cam2.querySelector('#iso-hook'); if (h) h.setAttribute('transform', `rotate(${th.toFixed(2)} ${h.dataset.o})`); };
  // A damped pendulum, in degrees, stepped at 60 Hz
  const pend = () => { const dt = 1 / 60; om += (-th * 26 - om * 1.8) * dt; th += om * dt; hookAt(); if (Math.abs(th) > .05 || Math.abs(om) > .2) swing = requestAnimationFrame(pend); else { th = om = 0; hookAt(); swing = 0; } };
  if (!reduce) { const iv = setInterval(() => { if (!document.body.contains(iso)) return clearInterval(iv); if (!swing && shown && !iso.classList.contains('off')) kick(Math.random() < .5 ? -.12 : .12); }, 4200); }
  const kick = d => { if (reduce) return; om = Math.max(-40, Math.min(40, om + d * 22)); if (!swing) swing = requestAnimationFrame(pend); };
  const say = s => {
    rd.innerHTML = `Cada piso suma <b>${n0(Math.round(s.area / s.pisos))} m²</b> · altura típica de entrepiso ${n0(s.hf, 1)} m`;
    leg.innerHTML = `Grupo ${s.g} (I = ${n0(s.I, 2)} · T ≈ ${n0(s.T, 2)} s · k = ${n0(s.k, 2)})${fine ? ' · pase el cursor por un piso' : ''}`;
  };
  const DOCS = ['Planos arquitectónicos', 'Estudio de suelos', 'Diseño estructural y memoria de cálculo', 'Planos estructurales firmados'];
  let lastDocs = 0;
  const verdict = s => {
    const m2 = n0(s.area), v = document.getElementById('ley-v'), vs = document.getElementById('ley-vs');
    if (s.over) { v.textContent = `Con ${m2} m², la ley le pide tres firmas más.`; vs.textContent = 'Un revisor independiente antes de la licencia y un supervisor técnico durante la obra, que al final firma el Certificado Técnico de Ocupación. Ninguno puede ser quien diseña ni quien construye.'; }
    else if (s.amp) { v.textContent = `Su diseño tiene ${m2} m², pero el lote permite pasar de 2.000 m².`; vs.textContent = 'Si la estructura debe soportar esa ampliación, la ley ya le pide revisión y supervisión independientes.'; }
    else if (s.area === 2000) { v.textContent = 'Está justo en el límite de la Ley 1796.'; vs.textContent = 'Un metro cuadrado más y la ley le pide revisión y supervisión independientes. Si el proyecto puede crecer, cuéntelo desde ya.'; }
    else { v.textContent = `Con ${m2} m², la ley no le pide firmas independientes.`; vs.textContent = `Le faltan ${n0(2000 - s.area)} m² para el umbral de la Ley 1796. Aun así, una segunda revisión es la forma más barata de encontrar un error de diseño.`; }
    if (s.g === 'III' || s.g === 'IV') vs.textContent += ` Grupo ${s.g}: la NSR-10 pide requisitos adicionales para este uso; confírmelo con la curaduría.`;
    const on = {dis: true, cur: true, rev: s.big, sup: s.big, cto: s.big};
    document.querySelectorAll('#ley .sg').forEach(r => { const k = r.dataset.k, yes = on[k]; r.classList.toggle('on', yes); r.querySelector('.no').textContent = yes ? '' : k === 'cto' ? 'No aplica' : k === 'sup' ? 'Recomendada' : 'No exigida'; });
    const nf = Object.values(on).filter(Boolean).length; document.getElementById('ley-n').textContent = nf + ' firmas';
    const docs = DOCS.map(t => [t, 0]).concat(s.big ? [['Memorial del revisor independiente', 1], ['Designación del supervisor técnico', 1]] : []);
    const ol = document.getElementById('ley-docs'); ol.innerHTML = docs.map(([t, l], i) => `<li class="${i >= lastDocs ? 'new' : ''}">${t}${l ? '<em>Ley 1796</em>' : ''}</li>`).join(''); lastDocs = docs.length;
    document.getElementById('ley-dn').textContent = docs.length + ' documentos';
    // the callouts over the model
    const need = 2000 / (s.area / s.pisos), fl = Math.floor(need) + 1;
    document.getElementById('ic-area').textContent = `${m2}\u00a0m² · umbral 2.000\u00a0m²`;
    const bar = iso.querySelector('.ic .bar'); bar.querySelector('i').style.width = (Math.min(s.area, 10000) / 100).toFixed(1) + '%'; bar.classList.toggle('over', s.big);
    document.getElementById('ic-umbral').textContent = s.over ? `Aplica desde el piso ${fl}` : s.amp ? 'Aplica: el lote lo supera' : s.area === 2000 ? 'Justo en el límite' : `No aplica · faltan ${n0(2000 - s.area)} m²`;
    document.getElementById('ic-firmas').textContent = `${nf} de 5`; iso.querySelectorAll('.pips i').forEach((p2, i) => p2.classList.toggle('on', i < nf));
    document.getElementById('h1s').textContent = s.big ? 'Con revisión independiente' : 'Sin revisión independiente';
    document.getElementById('h2s').textContent = s.big ? 'En curso · con supervisión técnica' : 'En curso';
    document.getElementById('h3s').textContent = s.big ? 'Certificado Técnico de Ocupación' : 'Sin certificado técnico';
    return s.big ? 'Requiere revisión independiente y supervisión técnica (Ley 1796).' : 'Hasta 2.000 m²: revisión y supervisión recomendadas, no exigidas.';
  };
  let summary = '', pend2 = 0; const SC = new Map(), VG = new Map();
  const viv2 = (k, str) => { let v = VG.get(k); if (!v) { v = vivid(str); VG.set(k, v); if (VG.size > 60) VG.delete(VG.keys().next().value); } return v; };
  const fill = el => el.style.setProperty('--p', ((el.value - el.min) / (el.max - el.min) * 100).toFixed(2) + '%');
  let dragging = false, lastHeavy = 0, heavyT = 0;
  const update = () => {
    pend2 = 0; const s = state(); S = s;
    if (prevN !== null && s.pisos !== prevN) kick(s.pisos > prevN ? -1 : 1); prevN = s.pisos;
    document.getElementById('ley-area-o').textContent = n0(s.area) + ' m²'; areaIn.setAttribute('aria-valuetext', n0(s.area) + ' m²');
    document.getElementById('ley-pisos-o').textContent = s.pisos === 1 ? '1 piso' : s.pisos + ' pisos'; pisosIn.setAttribute('aria-valuetext', document.getElementById('ley-pisos-o').textContent);
    fill(areaIn); fill(pisosIn); areaIn.classList.toggle('over', s.area > 2000); mark(); knobAt();
    const now = performance.now();
    if (dragging && now - lastHeavy < 80) { if (!heavyT) heavyT = setTimeout(() => { heavyT = 0; queue(); }, 80 - (now - lastHeavy)); return; }
    lastHeavy = now;
    const key = s.area + '|' + s.pisos + '|' + s.uso + '|' + s.amp; let pack = SC.get(key);
    if (!pack) { const sc = isoScene(s); pack = {sc, svg: vivid(sc.svg)}; SC.set(key, pack); if (SC.size > 80) SC.delete(SC.keys().next().value); }
    scene = pack.sc;
    if (world._k !== key) { world.innerHTML = pack.svg; hitG.innerHTML = scene.hit; world._k = key; const hk = world.querySelector('#iso-hook'); cam2.replaceChildren(...(hk ? [hk] : [])); camT = fit(scene.focus, scene.top); rebase(camL[1], camT); rebase(camL[2], camT); }
    if (gs._k !== scene.gkey) { gs.innerHTML = viv2('s' + scene.gkey, scene.ground); gs._k = scene.gkey; }
    if (gc._k !== scene.ckey) { gc.innerHTML = viv2('c' + scene.ckey, scene.city); gc._k = scene.ckey; }
    hl.setAttribute('points', ''); hookAt();
    say(s); summary = verdict(s); placeBlob(); aim(); leaders();
  };
  const queue = () => { if (!pend2) pend2 = requestAnimationFrame(update); };
  // Hover a floor: its level, what has been built up to it and its share of the base shear
  hitG.addEventListener('pointerover', e => {
    const i = +(e.target.dataset && e.target.dataset.i); if (!i || !S) return;
    hl.setAttribute('points', e.target.getAttribute('points'));
    const acc = Math.round(S.area / S.pisos * i), past = S.area > 2000 && acc > 2000;
    rd.innerHTML = `Piso ${i} · N +${n0(i * S.hf, 2)} · <b${past ? ' style="color:var(--accent-text)"' : ''}>${n0(acc)} m²</b> acumulados`;
    leg.innerHTML = `Fx = ${n0(cvx(S, i) * 100, 1)} % del cortante basal`;
  });
  iso.querySelectorAll('.iso-hitos li').forEach(li => { li.addEventListener('pointerenter', () => { if (scene) hl.setAttribute('points', scene.R[li.dataset.h] || ''); }); li.addEventListener('pointerleave', () => hl.setAttribute('points', '')); });
  hitG.addEventListener('pointerleave', () => { hl.setAttribute('points', ''); if (S) say(S); });
  scrollFns.add(r => { if (r === true) knobAt(); const b = iso.getBoundingClientRect(); document.documentElement.classList.toggle('no-cota', b.top < innerHeight * .7 && b.bottom > innerHeight * .3); if (!shown && inView()) start(); if (r === true && scene) { aim(); leaders(); } });
  document.getElementById('ley-go').onclick = e => { const b = e.currentTarget, s = S; b.classList.add('torqued'); try { sessionStorage.setItem('ddes-ley', JSON.stringify({area: s.area, pisos: s.pisos, usoTxt: s.usoTxt, summary, big: s.big})); } catch (x) {} setTimeout(() => { byClick = true; location.hash = '#contacto'; }, reduce ? 0 : 650); };
  const sc = form.querySelector('.ley-scale'), mark = () => { const a = areaOf(); sc.querySelector('.mk').style.left = (Math.min(a, 10000) / 100).toFixed(2) + '%'; sc.classList.toggle('on', a > 2000 || ampIn.checked); };
  [areaIn, pisosIn].forEach(el => el.addEventListener('pointerdown', () => { dragging = true; }));
  ['pointerup', 'pointercancel'].forEach(ev => addEventListener(ev, () => { if (dragging) { dragging = false; queue(); } }));
  form.addEventListener('input', queue); form.addEventListener('change', queue); form.addEventListener('submit', e => e.preventDefault());
  update(); setTimeout(() => { if (!shown && inView()) start(); }, 400);
}

// Cursor: the reticle sits exactly on the pointer. A glass bubble with a word follows a beat behind where it helps,
// and stretches along its direction of travel like a drop.
if (matchMedia('(pointer: fine)').matches && !reduce) {
  const root = document.documentElement; root.classList.add('has-cur');
  // The reticle drawn as the system cursor: ticks 1 x 7 px at the edges of a 23 px square, a 2 px dot, and the same light halo
  // (two soft drop-shadows) as before; turned 45° over anything clickable. 32 px is the largest cursor Chrome shows next to its
  // own toolbar, which is where the menu is, so the turned one keeps its size instead of growing.
  const reticle = (rc, rh, turn) => { const k = Math.min(3, Math.max(1, Math.ceil(devicePixelRatio || 1))), c = document.createElement('canvas'); c.width = c.height = 32 * k;
    const g = c.getContext('2d'); g.scale(k, k); g.translate(15.5, 15.5); if (turn) g.rotate(Math.PI / 4);
    g.filter = `drop-shadow(0 0 .8px ${rh}) drop-shadow(0 0 1.6px ${rh})`; g.fillStyle = rc;
    g.beginPath(); g.rect(-.5, -11.5, 1, 7); g.rect(-.5, 4.5, 1, 7); g.rect(-11.5, -.5, 7, 1); g.rect(4.5, -.5, 7, 1); g.arc(0, 0, 2.3, 0, 2 * Math.PI); g.fill();
    return `-webkit-image-set(url(${c.toDataURL('image/png')}) ${k}x) 15 15, auto`; };
  try {
    const LT = ['#0f0e0d', 'rgba(255,255,255,.95)'], DK = ['#fff', 'rgba(15,14,13,.9)'];
    [['--cn', LT, 0], ['--cl', LT, 1], ['--cnd', DK, 0], ['--cld', DK, 1]].forEach(([k, [a, b], t]) => root.style.setProperty(k, reticle(a, b, t)));
    root.classList.add('has-hwcur');
  } catch (e) {}
  const cur = document.getElementById('cur'), x = cur.querySelector('.x'), curb = document.getElementById('curb'), bub = curb.querySelector('.ring'), lab = curb.querySelector('em');
  const lens = UI.REFRACT ? UI.circle(88) : null;
  if (lens) bub.style.backdropFilter = `url(#${lens.id}) blur(1px) saturate(1.9) brightness(1.08)`;
  const aberrate = (sp, a) => {
    const spread = .09 + sp * .22, ax = Math.cos(a) * (.25 + sp * 1.1), ay = Math.sin(a) * (.25 + sp * 1.1);
    if (lens) lens.dp.forEach((d, i) => d.setAttribute('scale', (lens.S * (1 + (1 - i) * spread)).toFixed(1)));
    lab.style.setProperty('--ax', ax.toFixed(2)); lab.style.setProperty('--ay', ay.toFixed(2));
    bub.style.setProperty('--sx', (-Math.cos(a) * sp * 10).toFixed(1) + 'px'); bub.style.setProperty('--sy', (-Math.sin(a) * sp * 6).toFixed(1) + 'px');
  };
  aberrate(0, 0);
  let px = -200, py = -200, lx = -200, ly = -200, vx = 0, vy = 0, raf = 0, mode = '';
  const set = (m, txt = '') => { if (m !== mode) { cur.className = curb.className = m; mode = m; } if (lab.textContent !== txt) lab.textContent = txt; };
  // The bubble sits exactly on the pointer; only its shape responds to speed, stretching along the direction of travel.
  const loop = () => {
    vx += (px - lx - vx) * .35; vy += (py - ly - vy) * .35; lx = px; ly = py;
    const sp = Math.min(1, Math.hypot(vx, vy) / 38), a = Math.atan2(vy, vx) * 57.2958;
    bub.style.translate = `${px}px ${py}px`;
    bub.style.transform = `rotate(${a.toFixed(1)}deg) scale(${(1 + sp * .22).toFixed(3)},${(1 - sp * .16).toFixed(3)}) rotate(${(-a).toFixed(1)}deg)`;
    aberrate(sp, a / 57.2958);
    raf = Math.abs(vx) + Math.abs(vy) > .15 ? requestAnimationFrame(loop) : 0;
  };
  addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    px = e.clientX; py = e.clientY; x.style.translate = `${px}px ${py}px`; bub.style.translate = `${px}px ${py}px`; cur.style.opacity = 1;
    const t = e.target instanceof Element ? e.target : document.body, field = t.closest('input:not([type=range]):not([type=checkbox]):not([type=radio]),textarea,select'), knob = t.closest('input[type=range]'), drag = t.closest('[data-drag]'), media = t.closest('[data-cursor]'), link = t.closest('a,button,summary,label');
    const tone = t.closest('.portal') ? '' : t.closest('.hero,.hhero,.mani,.hs,.obra,.band:not(.lite),.grow,.touch,.ley-band,.ph,.reelbox,.top.dark') ? 'dk' : ''; if (cur.dataset.tone !== tone) cur.dataset.tone = tone;
    if (field) set('hide');
    else if (knob) set('link');
    else if (drag && !t.closest('a,button')) set('bub', drag.dataset.drag);
    else if (media) set('bub', media.dataset.cursor);
    else if (link) set('link');
    else set('');
    if (!raf) raf = requestAnimationFrame(loop);
  }, {passive: true});
  addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; const pl = document.createElement('span'); pl.className = 'cur-pulse'; pl.style.left = e.clientX + 'px'; pl.style.top = e.clientY + 'px'; cur.appendChild(pl); setTimeout(() => pl.remove(), 600); });
  root.addEventListener('mouseleave', () => { cur.style.opacity = 0; curb.className = mode = ''; });
}

// Exploded node: an isometric vector drawing of a bolted end-plate moment connection.
// Geometry is modelled in 3D (units ≈ cm), projected isometrically and depth-sorted every frame (painter's algorithm),
// so parts pass correctly in front of and behind each other while they separate. Easing is sine in-out, never elastic.
function nodeDiagram() {
  const svg = document.getElementById('node'), NS = 'http://www.w3.org/2000/svg', C = Math.cos(Math.PI / 6);
  const proj = (x, y, z) => [(x - y) * C, (x + y) * .5 - z];
  const parts = [], mk = (id, group, off, delay) => { const p = {id, group, off, delay, faces: [], e: 0}; parts.push(p); return p; };
  const col = mk('col', 'col', [0, 0, 0], 0), stfA = mk('stfA', 'stf', [0, 28, 0], .1), stfB = mk('stfB', 'stf', [0, -28, 0], .1),
        plate = mk('plate', 'plate', [26, 0, 0], .04), bolts = mk('bolts', 'bolts', [50, 0, 0], .12), beam = mk('beam', 'beam', [80, 0, 0], 0);
  // Only faces pointing at the viewer (+x, +y, +z) are ever visible, because parts only translate.
  const box = (p, [x0, x1], [y0, y1], [z0, z1], seg = 8) => {
    const L = [x1 - x0, y1 - y0, z1 - z0], ax = L.indexOf(Math.max(...L)), n = Math.max(1, Math.ceil(L[ax] / seg)), lo = [x0, y0, z0][ax];
    for (let i = 0; i < n; i++) {
      const r = [[x0, x1], [y0, y1], [z0, z1]].map(v => v.slice()); r[ax] = [lo + L[ax] * i / n, lo + L[ax] * (i + 1) / n];
      const [[xa, xb], [ya, yb], [za, zb]] = r, cut = [], ends = [lo, lo + L[ax]];
      const seam = q => { const c = q[ax]; return Math.abs(c - ends[0]) > 1e-6 && Math.abs(c - ends[1]) > 1e-6; };
      const add = (nrm, v) => p.faces.push({n: nrm, v, edges: v.map((q, k) => { const q2 = v[(k + 1) % v.length]; return !(seam(q) && seam(q2) && Math.abs(q[ax] - q2[ax]) < 1e-6); })});
      if (ax !== 0 || i === n - 1) add([1, 0, 0], [[xb, ya, za], [xb, yb, za], [xb, yb, zb], [xb, ya, zb]]);
      if (ax !== 1 || i === n - 1) add([0, 1, 0], [[xa, yb, za], [xb, yb, za], [xb, yb, zb], [xa, yb, zb]]);
      if (ax !== 2 || i === n - 1) add([0, 0, 1], [[xa, ya, zb], [xb, ya, zb], [xb, yb, zb], [xa, yb, zb]]);
    }
  };
  const prismX = (p, cy, cz, r, xa, xb, k, shank) => {
    const pt = (x, t) => [x, cy + r * Math.cos(t), cz + r * Math.sin(t)], a = i => i / k * 2 * Math.PI + Math.PI / k;
    for (let i = 0; i < k; i++) { const tm = (a(i) + a(i + 1)) / 2, n = [0, Math.cos(tm), Math.sin(tm)]; if (n[1] + n[2] > 0) p.faces.push({n, shank, v: [pt(xa, a(i)), pt(xb, a(i)), pt(xb, a(i + 1)), pt(xa, a(i + 1))]}); }
    p.faces.push({n: [1, 0, 0], shank, v: Array.from({length: k}, (_, i) => pt(xb, a(i)))});
  };
  // HEB 300 column
  box(col, [12.5, 15], [-15, 15], [0, 112]); box(col, [-15, -12.5], [-15, 15], [0, 112]); box(col, [-12.5, 12.5], [-.75, .75], [0, 112]);
  // continuity stiffeners, both sides of the web
  for (const [z0, z1] of [[73.2, 74.8], [35.2, 36.8]]) { box(stfA, [-12.5, 12.5], [.75, 14], [z0, z1]); box(stfB, [-12.5, 12.5], [-14, -.75], [z0, z1]); }
  // 25 mm end plate
  box(plate, [15, 17.5], [-12, 12], [23, 87]);
  // 8 bolts: hex heads and shanks
  for (const z of [81, 67, 43, 29]) for (const y of [-7, 7]) { prismX(bolts, y, z, .95, 10.5, 17.5, 8, true); prismX(bolts, y, z, 1.75, 17.5, 18.9, 6, false); }
  // IPE 400 beam
  box(beam, [17.5, 112], [-9, 9], [73, 75]); box(beam, [17.5, 112], [-.6, .6], [37, 73]); box(beam, [17.5, 112], [-9, 9], [35, 37]);

  const LBL = [
    {grp: 'col', p: col, at: [-13, 15, 104], dx: -34, dy: -14, t: 'Columna', s: 'HEB 300'},
    {grp: 'stf', p: stfA, at: [-10, 14, 74.8], dx: -26, dy: 30, t: 'Rigidizadores', s: '15 mm'},
    {grp: 'plate', p: plate, at: [17.5, -12, 87], dx: 24, dy: -34, t: 'Placa de extremo', s: '25 mm'},
    {grp: 'bolts', p: bolts, at: [18.9, 7, 81], dx: 22, dy: -26, t: 'Pernos', s: '8 × A325 Ø 22'},
    {grp: 'beam', p: beam, at: [100, 9, 75], dx: 10, dy: -26, t: 'Viga', s: 'IPE 400'}
  ];
  // View box that holds both states plus labels
  let mnx = 1e9, mny = 1e9, mxx = -1e9, mxy = -1e9;
  for (const p of parts) for (const f of p.faces) for (const v of f.v) for (const e of [0, 1]) { const [x, y] = proj(v[0] + p.off[0] * e, v[1] + p.off[1] * e, v[2] + p.off[2] * e); mnx = Math.min(mnx, x); mny = Math.min(mny, y); mxx = Math.max(mxx, x); mxy = Math.max(mxy, y); }
  mnx -= 62; mny -= 40; mxx += 36; mxy += 16;
  svg.setAttribute('viewBox', `${mnx.toFixed(1)} ${mny.toFixed(1)} ${(mxx - mnx).toFixed(1)} ${(mxy - mny).toFixed(1)}`);

  // Faint isometric floor grid
  const grid = document.createElementNS(NS, 'g'); grid.setAttribute('stroke', 'rgba(255,255,255,.07)'); grid.setAttribute('fill', 'none');
  for (let i = -40; i <= 200; i += 20) { for (const [a, b] of [[[i, -40, 0], [i, 40, 0]]]) { const l = document.createElementNS(NS, 'path'), A = proj(...a), B = proj(...b); l.setAttribute('d', `M${A}L${B}`); grid.appendChild(l); } }
  for (let j = -40; j <= 40; j += 20) { const l = document.createElementNS(NS, 'path'), A = proj(-40, j, 0), B = proj(200, j, 0); l.setAttribute('d', `M${A}L${B}`); grid.appendChild(l); }
  grid.querySelectorAll('path').forEach(l => l.setAttribute('vector-effect', 'non-scaling-stroke'));
  const gF = document.createElementNS(NS, 'g'), gL = document.createElementNS(NS, 'g');
  svg.replaceChildren(grid, gF, gL);
  const faces = []; parts.forEach(p => p.faces.forEach(f => faces.push({p, f})));
  const pool = faces.map(() => { const f = document.createElementNS(NS, 'path'), e = document.createElementNS(NS, 'path');
    for (const el of [f, e]) { el.setAttribute('vector-effect', 'non-scaling-stroke'); el.setAttribute('stroke-linejoin', 'round'); el.setAttribute('stroke-linecap', 'round'); }
    f.setAttribute('stroke-width', '.6'); e.setAttribute('fill', 'none'); gF.append(f, e); f._edge = e; return f; });
  const labels = LBL.map(l => {
    const g = document.createElementNS(NS, 'g'), line = document.createElementNS(NS, 'polyline'), dot = document.createElementNS(NS, 'circle'), t1 = document.createElementNS(NS, 'text'), t2 = document.createElementNS(NS, 'text');
    line.setAttribute('fill', 'none'); line.setAttribute('stroke', '#e8784a'); line.setAttribute('vector-effect', 'non-scaling-stroke');
    dot.setAttribute('r', '1.1'); dot.setAttribute('fill', '#e8784a');
    t1.setAttribute('fill', '#ffffff'); t1.setAttribute('font-size', '5.4'); t1.setAttribute('font-weight', '500'); t1.textContent = l.t;
    t2.setAttribute('fill', '#bdb7b0'); t2.setAttribute('font-size', '4.4'); t2.textContent = l.s;
    g.append(line, dot, t1, t2); gL.appendChild(g); return {...l, g, line, dot, t1, t2};
  });

  const Ld = [.42, .26, .87], mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  let hi = null;
  function draw() {
    const list = [];
    for (const {p, f} of faces) {
      if (f.shank && p.e * p.off[0] < 8) continue; // shanks are buried in the plates until the bolts are out
      const o = p.off.map(v => v * p.e);
      let d = 0; const pts = f.v.map(v => { d += v[0] + v[1] + v[2]; return proj(v[0] + o[0], v[1] + o[1], v[2] + o[2]); });
      list.push({p, f, depth: d / f.v.length + o[0] + o[1] + o[2], pts});
    }
    list.sort((a, b) => a.depth - b.depth);
    pool.forEach((el, i) => {
      const it = list[i]; if (!it) { el.setAttribute('d', ''); el._edge.setAttribute('d', ''); return; }
      const n = it.f.n, l = .3 + .7 * Math.max(0, n[0] * Ld[0] + n[1] * Ld[1] + n[2] * Ld[2]), on = hi === it.p.group, bolt = it.p.group === 'bolts';
      const c = bolt ? mix([74, 34, 18], [236, 128, 82], l) : on ? mix([58, 36, 26], [196, 122, 88], l) : mix([24, 22, 20], [92, 86, 80], l);
      const P = q => q[0].toFixed(2) + ' ' + q[1].toFixed(2), ed = it.f.edges;
      el.setAttribute('d', 'M' + it.pts.map(P).join('L') + 'Z');
      el.setAttribute('fill', `rgb(${c})`); el.setAttribute('stroke', `rgb(${c})`);
      let d = ''; it.pts.forEach((q, k) => { if (!ed || ed[k]) d += 'M' + P(q) + 'L' + P(it.pts[(k + 1) % it.pts.length]); });
      el._edge.setAttribute('d', d);
      el._edge.setAttribute('stroke', on || (bolt && hi === 'bolts') ? '#f0915f' : 'rgba(240,236,230,.78)');
      el._edge.setAttribute('stroke-width', on ? '1.3' : '.9');
    });
    for (const l of labels) {
      const o = l.p.off.map(v => v * l.p.e), [ax, ay] = proj(l.at[0] + o[0], l.at[1] + o[1], l.at[2] + o[2]);
      const k = Math.min(1, Math.max(0, (l.p.e - .55) / .45)), ex = ax + l.dx * .5, ey = ay + l.dy, tx = ax + l.dx, ty = ey;
      l.line.setAttribute('points', `${ax},${ay} ${ex},${ey} ${tx},${ty}`); l.dot.setAttribute('cx', ax); l.dot.setAttribute('cy', ay);
      const left = l.dx < 0; ['t1', 't2'].forEach((t, i) => { l[t].setAttribute('x', tx + (left ? -2 : 2)); l[t].setAttribute('y', ty - 1.6 + i * 6.2); l[t].setAttribute('text-anchor', left ? 'end' : 'start'); });
      l.g.style.opacity = k * (hi && hi !== l.grp ? .35 : 1);
    }
  }
  // Timeline: T runs 0→1 over 0.95 s; each part starts after its delay and eases with a sine in-out curve.
  let T = 0, target = 0, raf = 0, last = 0, locked = false;
  const DUR = .95, DMAX = .12, ease = t => .5 - .5 * Math.cos(Math.PI * t);
  const setE = () => parts.forEach(p => { p.e = ease(Math.min(1, Math.max(0, (T - p.delay) / (1 - DMAX)))); });
  function step(t) {
    const dt = last ? (t - last) / 1000 : 0; last = t;
    T = Math.min(1, Math.max(0, T + (target ? 1 : -1) * dt / DUR)); setE(); draw();
    if ((target && T < 1) || (!target && T > 0)) raf = requestAnimationFrame(step); else { raf = 0; last = 0; }
  }
  const go = v => { target = v; if (reduce) { T = v; setE(); draw(); return; } if (!raf) raf = requestAnimationFrame(step); };
  const btn = document.getElementById('node-toggle'), items = document.querySelectorAll('#parts li');
  const lock = v => { locked = v; btn.setAttribute('aria-pressed', v); btn.textContent = v ? 'Ensamblar' : 'Ver despiece'; go(v ? 1 : 0); };
  svg.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') go(1); });
  svg.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && !locked) go(0); });
  let ptype = 'mouse'; svg.addEventListener('pointerdown', e => { ptype = e.pointerType; }); svg.addEventListener('click', () => { if (ptype !== 'mouse') lock(!locked); });
  btn.addEventListener('click', () => lock(!locked));
  const highlight = g => { hi = g; items.forEach(li => li.classList.toggle('on', li.dataset.part === g)); draw(); };
  items.forEach(li => { li.addEventListener('pointerenter', () => { highlight(li.dataset.part); if (!locked) go(1); }); li.addEventListener('pointerleave', () => { highlight(null); if (!locked) go(0); }); });
  svg.addEventListener('pointermove', e => {
    const h0 = document.elementFromPoint(e.clientX, e.clientY), hit = h0 && h0.previousSibling && h0.previousSibling._edge === h0 ? h0.previousSibling : h0, i = pool.indexOf(hit);
    if (i < 0) return highlight(null);
    // find which part owns the face currently drawn by this path
    const drawn = []; for (const {p, f} of faces) { if (f.shank && p.e * p.off[0] < 8) continue; const o = p.off.map(v => v * p.e); let d = 0; f.v.forEach(v => d += v[0] + v[1] + v[2]); drawn.push({p, depth: d / f.v.length + o[0] + o[1] + o[2]}); }
    drawn.sort((a, b) => a.depth - b.depth); const it = drawn[i]; if (it && hi !== it.p.group) highlight(it.p.group);
  });
  svg.addEventListener('pointerleave', () => highlight(null));
  draw();
}

// Magnetic buttons: a few primary actions lean toward the cursor (max 6 px) and settle back; no overshoot.
if (matchMedia('(pointer: fine)').matches && !reduce) {
  let mq = 0, mx = 0, my = 0;
  const magnet = () => { mq = 0; document.querySelectorAll('[data-magnet]').forEach(b => {
    const r = b.getBoundingClientRect(), dx = mx - (r.left + r.width / 2), dy = my - (r.top + r.height / 2), near = Math.abs(dx) < r.width / 2 + 36 && Math.abs(dy) < r.height / 2 + 36, c = v => Math.max(-6, Math.min(6, v));
    b.style.setProperty('--mx', near ? c(dx * .16).toFixed(1) + 'px' : '0px'); b.style.setProperty('--my', near ? c(dy * .28).toFixed(1) + 'px' : '0px'); }); };
  addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; if (!mq) mq = requestAnimationFrame(magnet); }, {passive: true});
}

// The header takes the colour of whatever sits under it
const topEl = document.querySelector('.top');
let hq = 0;
// The header turns light over dark sections. Their spans are measured at most every 1,5 s (and on each new page),
// so a scroll frame only compares numbers instead of hit-testing the page.
let darkR = [], darkT = 0, hdrH = 0;
const DARK = '.mani,.hero,.hhero,.hs,.obra,.band:not(.lite),.grow,.touch,.ley-band';
function hdrState() {
  hq = 0; const now = performance.now();
  if (now - darkT > 1500) { darkT = now; hdrH = topEl.offsetHeight; darkR = [...app.querySelectorAll(DARK)].filter(el => !el.parentElement.closest(DARK) && !el.classList.contains('hh-open')).map(el => { const r = el.getBoundingClientRect(); return [r.top + scrollY, r.bottom + scrollY]; }); }
  const y = scrollY + hdrH / 2;
  topEl.classList.toggle('dark', darkR.some(([a, b]) => y >= a && y < b) && !nav.classList.contains('open'));
}
addEventListener('scroll', () => { if (!hq) hq = requestAnimationFrame(hdrState); }, {passive: true});
addEventListener('resize', hdrState);
setTimeout(hdrState, 1900);
// 1 · The photo you click becomes the hero of the next page
let morphFrom = null, byClick = false, curHash = here(), lqX = innerWidth / 2, lqY = innerHeight / 2;
addEventListener('pointerdown', e => { lqX = e.clientX; lqY = e.clientY; }, {capture: true, passive: true});
// The press answers at once: a bead of the drop forms under it (links in the page and in the menu sheet; the header and the tab
// bar answer with their own lens). If no page change follows (a scroll, a link to the same page) it melts away.
let lqBead = null;
const beadOff = () => { const b = lqBead; if (b && b.isConnected && !b.classList.contains('out')) { b.classList.add('out'); setTimeout(() => { if (b.classList.contains('out')) b.remove(); }, 240); } };
const beadR = () => { const b = lqBead; if (!b || !b.isConnected || b.classList.contains('out')) return 0; const t = getComputedStyle(b).transform; return t && t !== 'none' ? 28 * new DOMMatrix(t).a : 0; };
addEventListener('pointerdown', e => {
  if (reduce || !SVT || e.button > 0) return;
  const a = e.target instanceof Element && e.target.closest(linkSel), h = a && hrefOf(a);
  if (!a || h.length < 2 || h === here() || nav.contains(a) || a.closest('.tabbar') || a.querySelector('.ph')) return;
  if (!lqBead) { lqBead = document.createElement('div'); lqBead.className = 'lq-bead'; lqBead.setAttribute('aria-hidden', 'true'); }
  const b = lqBead; b.classList.remove('out'); b.style.setProperty('--bx', e.clientX + 'px'); b.style.setProperty('--by', e.clientY + 'px');
  b.remove(); document.body.appendChild(b); clearTimeout(beadOff.t); beadOff.t = setTimeout(beadOff, 900);
}, {capture: true, passive: true});
addEventListener('pointercancel', beadOff, {passive: true});
const scrollMem = new Map();
// Intent: the moment a pointer rests on a link (or a finger lands on it), the next page's first photographs start loading and
// decoding, so the page that opens out of the drop is already sharp instead of sharpening after the reveal
const preHit = new Map(); let preHtml = null;
function preloadFor(href) {
  let h = ''; try { h = decodeURIComponent(href.slice(1)); } catch (e) { return; }
  if (preHit.has(h) || preHit.size > 40) return;
  const r = routes.find(x => x.re.test(h)); if (!r) return;
  let html = ''; try { html = r.page(h.match(r.re) || ['']) || ''; } catch (e) { return; }
  preHtml = {h, html, t: performance.now()};
  const ims = [], re = /<img src="\/fotos\/([^"]+?)\.jpg" srcset="([^"]+)" sizes="([^"]+)"/g; let m;
  while ((m = re.exec(html)) && ims.length < 2) { const im = new Image(); im.decoding = 'async'; im.sizes = m[3]; im.srcset = m[2]; im.src = `/fotos/${m[1]}.jpg`; im.decode().catch(() => {}); ims.push(im); }
  preHit.set(h, ims);
}
const intent = e => { const a = e.target instanceof Element && e.target.closest(linkSel); if (a && hrefOf(a).length > 1) preloadFor(hrefOf(a)); };
// on a press the preload waits for the next frame, so the first frame of the press's own feedback (bead, tab lens) goes out first
document.addEventListener('pointerover', intent, {passive: true}); document.addEventListener('pointerdown', e => { const t = e.target; requestAnimationFrame(() => setTimeout(() => intent({target: t}), 0)); }, {passive: true, capture: true}); document.addEventListener('focusin', intent);
// The main tabs' first photographs are fetched quietly once the page has settled, one after another, so a tab opens with its
// photograph already sharp, also on a phone, where there is no hover to start the preload early (on a real connection the drop
// otherwise revealed the grey, blurred placeholder). Skipped when the visitor saves data or is on 2G.
(() => { const c = navigator.connection; if (c && (c.saveData || /2g/.test(c.effectiveType || ''))) return;
  const list = ['#inicio', '#servicios', '#experiencia', '#contacto', '#nosotros', '#perspectivas'];
  const idle = f => (window.requestIdleCallback || setTimeout)(f, {timeout: 3000});
  const next = () => { const h = list.shift(); if (!h) return; if (h === here() || (h === '#inicio' && !here())) return next();
    preloadFor(h); const ims = preHit.get(h.slice(1)) || [];
    Promise.all(ims.map(im => im.decode().catch(() => {}))).then(() => idle(next)); };
  setTimeout(() => idle(next), 2500); })();
document.addEventListener('click', e => { const a = e.target instanceof Element && e.target.closest(linkSel); morphFrom = a ? a.querySelector('.ph') : null; if (a) byClick = true; }, true);
// Real addresses: a link to another page moves the address and plays the same page change as a #link; back and forward too.
// An old #link (or one shared before) lands on its real address.
if (PATHS) {
  document.addEventListener('click', e => {
    if (e.defaultPrevented || e.button > 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target instanceof Element && e.target.closest('a[data-h]'); if (!a || a.target) return;
    e.preventDefault(); const to = k2p(a.dataset.h); if (to === location.pathname) return;
    history.pushState(null, '', to); dispatchEvent(new HashChangeEvent('hashchange'));
  });
  addEventListener('popstate', () => dispatchEvent(new HashChangeEvent('hashchange')));
  const h0 = location.hash.slice(1); if (h0 && routes.some(r => r.re.test(h0))) history.replaceState(null, '', k2p(h0));
  new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => { if (n.nodeType === 1) pathLinks(n); }))).observe(document.body, {childList: true, subtree: true});
}
// Liquid-glass page transition. The browser turns both pages into flat images during a view transition; CSS can only clip them.
// To make the edge refract what is behind it, the image of the page being left goes through an SVG displacement lens whose
// map (built once on a canvas) is placed around the drop and grows with it. R, G and B are displaced by slightly different
// amounts: chromatic aberration.
// One clock for the whole drop. The opening, the ring and the lens are set together, in the same frame, from one value of the
// curve: the glass can never drift off the opening's edge. The drop opens from a visible 40 px and crosses the screen in 0,3 s
// at an almost even pace (a slight acceleration), ending exactly when it has covered the farthest corner: no tail. Under it,
// the new page settles from a slight zoom and the old one dims (see lqSet): depth, like a cut in a film.
const LQ_D = 220, lqEase = (() => { const x1 = .25, y1 = .1, x2 = .6, y2 = .9, bx = t => 3 * x1 * t * (1 - t) ** 2 + 3 * x2 * t * t * (1 - t) + t ** 3, by = t => 3 * y1 * t * (1 - t) ** 2 + 3 * y2 * t * t * (1 - t) + t ** 3;
  return x => { let lo = 0, hi = 1; for (let i = 0; i < 24; i++) { const m = (lo + hi) / 2; if (bx(m) < x) lo = m; else hi = m; } return by((lo + hi) / 2); }; })();
// Lens strength on screen as a function of the drop's radius f (0..1 of the final radius): about 70 at every size, as v55 bent it,
// easing off as the drop leaves the screen. (Following time instead made the faster curve bend 35 % less at the same radius.)
const lqSc = f => 72 * (1 - Math.exp(-f / .035)) * (1 - .6 * f ** 4);
let lqMap = null, lqRaf = 0, lqSheet = null, lqG = null;
// The drop's rules for one page change: written once before it starts (opening shut, ring hidden), then only the opening's
// clip-path and the ring's mask change, through the rule objects themselves (no stylesheet is re-parsed). A still animation on the root group keeps the
// transition open for the drop's duration and is the clock everything reads. ':root' outranks the resting rules above.
function lqKeys(X, Y, R, r0 = 0) {
  if (!lqSheet) { const st = document.createElement('style'); document.head.appendChild(st); lqSheet = st.sheet; }
  while (lqSheet.cssRules.length) lqSheet.deleteRule(0);
  const add = t => lqSheet.cssRules[lqSheet.insertRule(t, lqSheet.cssRules.length)].style;
  add('@keyframes lq-hold{from{opacity:1}to{opacity:1}}');
  add(`:root::view-transition-group(root){animation:${LQ_D}ms linear both lq-hold}`);
  const root = add(`:root::view-transition-new(root){animation:none;clip-path:circle(${r0}px at ${X}px ${Y}px)}`);
  const ring = add(`:root::view-transition-new(lqring){animation:none;opacity:0}`);
  // the page being left dims as the drop takes it (with the lens while it bends, without it otherwise)
  const dim = add(`:root::view-transition-old(root){filter:brightness(1)}`), dimL = add(`:root.lq-on::view-transition-old(root){filter:url(#lqf) brightness(1)}`);
  root.transformOrigin = `${X}px ${Y}px`;
  lqG = {X, Y, Rf: R + 4, r0, root, ring, dim, dimL, r: -1, o: -1}; lqSet(0, 0);
}
// The rim: v55's ring, a conic sheen masked to a band on the opening's edge with a soft inner ramp; it fades over the last stretch
function lqSet(f, p) {
  const g = lqG; if (!g) return; const r = Math.round((g.r0 + (g.Rf - g.r0) * f) * 10) / 10, o = r > 1 ? Math.round(Math.min(1, (1 - p) / .28) * 100) / 100 : 0;
  if (o !== g.o) { g.o = o; g.ring.opacity = o; }
  if (r === g.r) return; g.r = r;
  // Cinematic depth: the new page arrives a little close (8 %) and settles back to its place as the drop opens, a camera pulling
  // back into the next scene; the page being left loses light as it is swallowed. The opening keeps its size on screen: the
  // clip is drawn in the zoomed page's own coordinates, around the same centre.
  const z = 1 + .08 * (1 - f), b = (1 - .26 * Math.pow(f, 1.6)).toFixed(3);
  g.root.transform = `scale(${z.toFixed(4)})`;
  g.root.clipPath = `circle(${(r / z).toFixed(1)}px at ${g.X}px ${g.Y}px)`;
  g.dim.filter = `brightness(${b})`; g.dimL.filter = `url(#lqf) brightness(${b})`;
  const m = `radial-gradient(circle at ${g.X}px ${g.Y}px,transparent ${Math.max(0, r - 10)}px,rgba(0,0,0,.35) ${Math.max(0, r - 8)}px,#000 ${Math.max(0, r - 3)}px,#000 ${Math.max(0, r - .5)}px,transparent ${r + 1}px)`;
  g.ring.webkitMask = m; g.ring.mask = m;
}
function lqLens() {
  if (!lqMap) { const N = 256, c = document.createElement('canvas'); c.width = c.height = N; const x = c.getContext('2d'), im = x.createImageData(N, N);
    // the drop's edge sits at r0 of the map; the lens pulls the page outward just outside it, strongest at the edge
    const r0 = .62;
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const dx = (i + .5) / N * 2 - 1, dy = (j + .5) / N * 2 - 1, r = Math.hypot(dx, dy) || 1e-6, o = (j * N + i) * 4;
      const t = (r - r0) / .2, m = r < r0 ? 0 : Math.exp(-t * t * 1.6) * (1 - Math.min(1, Math.max(0, (r - .9) / .1)));
      im.data[o] = 128 + 127 * m * dx / r; im.data[o + 1] = 128 + 127 * m * dy / r; im.data[o + 2] = 128; im.data[o + 3] = 255; }
    x.putImageData(im, 0, 0); lqMap = c.toDataURL('image/png'); document.getElementById('lqm').setAttribute('href', lqMap); }
}
// the map (256² drawn pixel by pixel: 23–27 ms on a phone) is made while the browser is idle, not inside the first page change
(window.requestIdleCallback || setTimeout)(lqLens, {timeout: 4000});
function lqRun(R) {
  const de = document.documentElement, img = document.getElementById('lqm'), d = [1, 2, 3].map(i => document.getElementById('lqd' + i)), sub = [...document.querySelectorAll('#lqf .lqb')];
  const an = document.getAnimations().find(a => a.animationName === 'lq-hold'), Rf = R + 4, t0 = performance.now(), r0 = lqG ? lqG.r0 : 0;
  // every attribute write invalidates the whole filter, so only values that changed are written, rounded to whole pixels
  const set = (n, k, v) => { if (n['_' + k] !== v) { n['_' + k] = v; n.setAttribute(k, v); } };
  const step = now => { const ct = an && an.currentTime != null ? +an.currentTime : now - t0, p = Math.min(1, Math.max(0, ct / LQ_D)), f = lqEase(p), sc = lqSc(f), half = (r0 + (Rf - r0) * f) / .62;
    lqSet(f, p);
    set(img, 'x', Math.round(lqX - half)); set(img, 'y', Math.round(lqY - half)); set(img, 'width', Math.round(half * 2)); set(img, 'height', Math.round(half * 2));
    set(d[0], 'scale', Math.round(sc * .9)); set(d[1], 'scale', Math.round(sc)); set(d[2], 'scale', Math.round(sc * 1.12));
    // every lens primitive works only where the map bends (inside 0,9 of its radius), clipped to the screen
    const o = half * .9, bx = Math.max(0, Math.round(lqX - o)), by = Math.max(0, Math.round(lqY - o)), bw = Math.max(1, Math.min(innerWidth, Math.round(lqX + o)) - bx), bh = Math.max(1, Math.min(innerHeight, Math.round(lqY + o)) - by);
    sub.forEach(n => { set(n, 'x', bx); set(n, 'y', by); set(n, 'width', bw); set(n, 'height', bh); });
    de.classList.toggle('lq-on', sc > 1.5);
    if (p < 1) lqRaf = requestAnimationFrame(step); };
  step(performance.now());
}
function lqStop() { cancelAnimationFrame(lqRaf); lqG = null; document.documentElement.classList.remove('lq-on'); }
window.addEventListener('hashchange', () => {
  scrollMem.set(curHash, lastY); const back = !byClick; byClick = false; curHash = here();
  const go = () => { route(); const y = back && scrollMem.get(curHash); if (y) { cvAll(); window.scrollTo(0, y); } };
  if (reduce) return go();
  if (SVT) {
    // a tab-bar lens still gliding finishes first, so the captured page shows it landed instead of frozen half-way
    const wait = tbGlide - performance.now(); tbGlide = 0;
    if (wait > 0) return void setTimeout(drop, wait);
    return void drop();
  }
  app.classList.add('leave'); setTimeout(go, 120);
  function drop() {
    const from = morphFrom; morphFrom = null;
    if (from) from.style.viewTransitionName = 'hero-img';
    topEl.style.viewTransitionName = 'site-header';
    // Liquid glass: the next page opens out of a drop that grows from the pointer, its rim a glass lens. Nothing is written on
    // <html> (a custom property there restyles every element of the page being captured): the ring layers carry the centre.
    const R = Math.hypot(Math.max(lqX, innerWidth - lqX), Math.max(lqY, innerHeight - lqY));
    lqKeys(lqX, lqY, R, from ? 0 : Math.max(40, beadR())); lqLens(); document.documentElement.classList.add('lq-on');
    const rings = from ? [] : [0].map(() => { const c = document.createElement('div'); c.className = 'lq-ring'; c.setAttribute('aria-hidden', 'true');
      c.style.setProperty('--lqx', lqX.toFixed(0) + 'px'); c.style.setProperty('--lqy', lqY.toFixed(0) + 'px'); return c; });
    const vt = document.startViewTransition(async () => {
      if (from) from.style.viewTransitionName = '';
      go(); clearTimeout(beadOff.t); if (lqBead) lqBead.remove(); rings.forEach(c => document.body.appendChild(c)); UI.snap();
      const to = from && app.querySelector('.hero .ph');
      if (to) to.style.viewTransitionName = 'hero-img';
      // The new page is shown whole: its first photograph gets a moment (at most 0,11 s; usually it is already decoded from the
      // intent above) and every photograph already loaded appears at once, without its own fade-in after the reveal
      const hi = app.querySelector('.ph img');
      if (hi && !(hi.complete && hi.naturalWidth)) await Promise.race([hi.decode().catch(() => {}), new Promise(r => setTimeout(r, 70))]);
      app.querySelectorAll('.ph img:not(.ok)').forEach(i => { if (i.complete && i.naturalWidth) { const els = [i, i.nextElementSibling].filter(Boolean); els.forEach(e => { e.style.transition = 'none'; }); i.classList.add('ok'); requestAnimationFrame(() => requestAnimationFrame(() => els.forEach(e => { e.style.transition = ''; }))); } });
    });
    const nb = navBusy = vt.finished.catch(() => {}).then(() => { if (navBusy === nb) navBusy = null; });
    vt.ready.then(() => lqRun(R)).catch(() => {});
    vt.finished.finally(() => { rings.forEach(c => c.remove()); lqStop(); UI.kick(); const to = app.querySelector('.hero .ph'); if (to) to.style.viewTransitionName = ''; topEl.style.viewTransitionName = ''; hdrState(); navTone(); });
  }
});
document.addEventListener('click', e => { const a = e.target instanceof Element && e.target.closest('a'); if (!a) return; const h = a.getAttribute('href') || '', where = a.closest('header,footer,.tabbar,.sheet') ? (a.closest('header') ? 'encabezado' : a.closest('footer') ? 'pie' : 'menu') : 'pagina';
  if (/wa\.me\//.test(h)) track('contact', {method: 'whatsapp', ubicacion: where});
  else if (h.startsWith('tel:')) track('contact', {method: 'telefono', ubicacion: where});
  else if (h.startsWith('mailto:')) track('contact', {method: 'correo', ubicacion: where});
  else if ((a.dataset.h || h) === '#contacto' || h === '/contacto/') track('pedir_propuesta', {ubicacion: where, texto: a.textContent.trim().slice(0, 40)});
}, true);
pathLinks(); route();
